const btn = document.getElementById('btn')
btn.addEventListener('click', getText)

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', getUsers)

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', getTodo)

var form = document.getElementById('addPost')
form.addEventListener('submit', addPost)

function getText() {
    // fetch('sample.txt')
    //     .then(function(response) {
    //         // console.log(response)
    //         // console.log(response.text())
    //         return response.text()
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //     })

    //using ES6
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = `<p>${data}</p>`
        }).catch((err) => console.log(err))
}

function getUsers() {
    // console.log('get users')

    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            let output = '<h2 class="mb-4 text-primary">Users</h2>'
            data.forEach(function(user) {
                output += `
                    <ul class="list-group mb-3">
                        <li class="list-group-item">ID: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                    </ul>
                `
            })
            document.getElementById('output').innerHTML = output
        })
}

function getTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            let output = '<h2 class="mb-4 text-primary">Todos</h2>'
            data.forEach(function(todo) {
                output += `
                    <div class="card card-body mb-3">
                        <h5>ID: ${todo.id}</h5>
                        <h3>Title: ${todo.title}</h3>
                        <p>isCompleted: ${todo.completed}</p>
                    </div>
                `
            })
            document.getElementById('output').innerHTML = output
        }).catch((err) => {
            document.getElementById('output').innerHTML = err
        })
}

function addPost(e) {
    e.preventDefault()
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title: title, body: body })
        })
        .then((res) => res.json())
        .then((data) => {
            // let output = '<h2 class="mb-4 text-primary">Posts</h2>'
            // data.forEach(function(post) {
            //     output += `
            //         <div class=card card-body>
            //             <h3>Title: ${post.title}</h3>
            //             <p>Body: ${post.body}</p>
            //         </div>
            //     `
            // })
            // document.getElementById('output').innerHTML = output
            console.log(data)
        })
}