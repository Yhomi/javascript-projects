// console.log(window)

// Selectors

// Single Element
// const form = document.getElementById('my-form')
//     // console.log(form)
// const container = document.querySelector('.container')
//     // console.log(container)

// // Multiple Element
// const items = document.querySelectorAll('.item')
//     // console.log(items)
// const list = document.getElementsByClassName('item')
//     // console.log(list)
//     // console.log(document.getElementsByTagName('li'))

// items.forEach((item) => console.log(item))
// const ul = document.querySelector('.items')
//     // ul.remove();
//     // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello"
// ul.children[1].innerText = 'Jon'
// ul.lastElementChild.innerHTML = '<h1>Snow</h1>'
// const btn = document.querySelector('.btn')
// // btn.style.background = 'red'
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//         // console.log('click')
//         // console.log(e.target)
//         // document.querySelector('#my-form').style.background = 'black'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').firstElementChild.innerHTML = '<h1>Hello There!</h1>'
// })

const form = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('.msg')
const UserList = document.querySelector('#users')

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    if (name.value == '' || email.value == '') {
        message.classList.add('error')
        message.innerHTML = "Please Enter all Fields"
        setTimeout(() => message.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`))
        UserList.appendChild(li)
            // clear the field
        name.value = ''
        email.value = ''
    }
}