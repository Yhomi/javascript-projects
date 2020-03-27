document.getElementById("myform").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  e.preventDefault();
  var siteName = document.getElementById("sitename").value;
  var siteUrl = document.getElementById("siteurl").value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  //   console.log(bookmark);

  //   //Local storage Test

  //   // save in local storage
  //   localStorage.setItem("test", "Hello World!");

  //   // get the item in local storage

  //   console.log(localStorage.getItem("test"));

  //   //delete an item from local storage
  //   localStorage.removeItem("test");

  //   // show the items in local storage

  //   console.log(localStorage.getItem("test"));

  // Check if there is already bookmarks in the local storage

  if (localStorage.getItem("bookmarks") === null) {
    // create an array to store the bookmarks
    var bookmarks = [];

    // push the value in the bookmark object into the array
    bookmarks.push(bookmark);

    // set the  value into the local storage

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    //if there is already bbokmarks in the local storage

    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    // push it to the array
    bookmarks.push(bookmark);

    //re-set bookmark again
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    document.getElementById("myform").reset();
  }
  fetchBookmarks();
}

function fetchBookmarks() {
  // Get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  var bookmarksResult = document.getElementById("bookmarkResult");

  bookmarksResult.innerHTML = "";

  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResult.innerHTML +=
      '<div class="well">' +
      "<h3>" +
      name +
      '<a class="btn btn-danger pull-right ml-2" href="#" onclick="deleteBookmark(\'' +
      url +
      "')\">Delete</a>" +
      '<a class="btn btn-default pull-right" href="' +
      url +
      '" target="_blank">Visit</a>' +
      "</h3>" +
      "</div>";
  }
}

function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // remove from array
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  fetchBookmarks();
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("Please Fill the form");
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please Use a valid URL");
    return false;
  }

  return true;
}
