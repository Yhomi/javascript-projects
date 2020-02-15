const posts = [
    { title: 'Post One', body: "This is post number one" },
    { title: 'Post Two', body: "This is post number two" }
]

let display = document.querySelector('#display')

//  CallBacks

// function getPost() {
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post) => {
//             output += `<ul>
//             <li>${post.title}</li>
//         </ul>`
//         })
//         display.innerHTML = output
//     }, 1000)

// }

// getPost();

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// createPost({ title: "Post Three", body: 'Post Number Three' }, getPost)

// Promises

function getPost() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<ul>
            <li>${post.title}</li>
        </ul>`
        })
        display.innerHTML = output
    }, 1000)

}

// getPost();

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false
            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}

// createPost({ title: 'Post Four', body: 'Post number four' })
//     .then(getPost).catch((err) => console.log(err))

// Async \ Await

async function init() {
    await createPost({ title: 'Post Four', body: 'Post number four' })
    getPost()
}
init()

// Async / await / Fetch

async function fetchUsers() {
    const res = await fetch('../fetchAPI/users.json')
    const data = await res.json()
    let output = ''
    data.forEach((user) => {
        output += `
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
        `
    })
    console.log(output)
}
fetchUsers()

// Promise.all
const promise1 = Promise.resolve("hello world")
const promise2 = 200
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "GoodBye")
})
const promise4 = fetch('../fetchAPI/sample.txt').then((res) => res.text())
Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))