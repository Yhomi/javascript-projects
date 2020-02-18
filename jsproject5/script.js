let filterInput = document.getElementById('filter');
let ul = document.getElementById('names');

filterInput.addEventListener('keyup', searchNames);


function searchNames() {
    let filterValue = filterInput.value.toLowerCase()
    let li = ul.getElementsByClassName('collection-item')
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }
    }

}