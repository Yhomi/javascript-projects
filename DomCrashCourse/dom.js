// // Examine the document object
// // console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.forms)

// SELECTOR

// getElementById
// console.log(document.getElementById('header-title'))
// var headTitle = document.getElementById('header-title')
//     // headTitle.innerText = "Hello"
//     // headTitle.innerHTML = '<h3>World</h3>'
//     // headTitle.textContent = "Hello World"
//     // headTitle.style.borderBottom = "3px solid black"
// const header = document.getElementById('main-header')
// header.style.borderBottom = "3px solid #000"

// getElementsByClassName
// const items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[2].textContent = "Hello 3"
// items[0].style.fontWeight = "bold"
// items[3].style.backgroundColor = "red"
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// getElementsByTagName

// const itemList = document.getElementsByTagName('li')
// console.log(itemList)
// Array.from(itemList).forEach((item) => {
//     console.log(item)
//     item.textContent = "Hello"
// })

// querySelector
// const header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px grey'
// const input = document.querySelector('input')
// input.value = 'Hello World'
// var submit = document.querySelector('input[type=submit]')
// submit.value = "Send"
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'green'
// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'blue'

//querySelectorAll
// const titles = document.querySelectorAll('.title')
// console.log(titles)
//     // titles[0].textContent = 'Hello'
// const odd = document.querySelectorAll('li:nth-child(odd)')
// const even = document.querySelectorAll('li:nth-child(even)')
// odd.forEach((items) => {
//     items.style.backgroundColor = '#f4f4f4'
// })
// even.forEach((item) => {
//     item.style.backgroundColor = "#ccc"
// })

// Transversing the DOM
// const itemList = document.querySelector('#items')

// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow'

// // firstchild
// console.log(itemList.firstChild)

// // firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "hello 1"
// itemList.firstElementChild.style.backgroundColor = 'red'

// lastChild
// console.log(itemList.lastChild)

// //lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'last item'

// siblings
// console.log(itemList.nextSibling)

// // nextElementSibling
// console.log(itemList.nextElementSibling)

// //previousSibling
// console.log(itemList.previousSibling)

// //previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'red'

// Create Element
// const newDiv = document.createElement('div')
//     // add class
// newDiv.className = 'ace'
//     // add id
// newDiv.id = 'dace'
//     // add Attribute
// newDiv.setAttribute('name', 'ace')
//     // create textnode
// const newDivText = document.createTextNode('Hello World')
//     // add text to div
// newDiv.appendChild(newDivText)

// var position = document.querySelector('.container')
// var h1 = document.querySelector('header h1')


// console.log(newDiv)
//     // insert to html
// newDiv.style.fontSize = '30px'
// position.insertBefore(newDiv, h1)

// EVENTS
var button = document.getElementById('button')
    // button.addEventListener('click', buttonClick)

// function buttonClick(e) {
//     // console.log('button clicked')
//     // document.getElementById('header-title').textContent = "Changed"
//     // document.querySelector('#main').style.backgroundColor = "#f4f4f4"
//     // console.log(e)
//     // console.log(e.target)
//     //     //get the id
//     // console.log(e.target.id)
//     //     //getClass name
//     // console.log(e.target.className)
//     //     // list class
//     // console.log(e.target.classList)
//     var output = document.getElementById('output')
//     output.innerHTML = '<h3>' + e.target.id + '</h3>'
//         // console.log(e.type)
//         // Mouse position from the window
//         // console.log(e.clientX) //get the mouse position from the X-axis
//         // console.log(e.clientY) // get the mouse position from the Y-axis
//         // mouse position from the element
//         // console.log(e.offsetX)
//         // console.log(e.offsetY)
//         // to check if some keys were hold down when performing a click event
//         // console.log(e.ctrlKey) // to check if the control key was pressdown while clicking
//         // console.log(e.altKey) // to check for alt key press down
//         // console.log(e.shiftKey) // to check for shift key



// }

var box = document.getElementById('box')

// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)

//button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)

const inputItem = document.querySelector('input[type="text"]')
const form = document.querySelector('form')

// inputItem.addEventListener('keydown', runEvent)
// inputItem.addEventListener('keyup', runEvent)
// inputItem.addEventListener('keypress', runEvent)

// inputItem.addEventListener('focus', runEvent)
// inputItem.addEventListener('blur', runEvent)

// inputItem.addEventListener('cut', runEvent)
// inputItem.addEventListener('paste', runEvent)

// inputItem.addEventListener('input', runEvent)

var select = document.querySelector('select')
    // select.addEventListener('change', runEvent)
    // select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent)


function runEvent(e) {
    e.preventDefault()
    console.log('EVENT TYPE: ' + e.type)
        // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>'
        // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",50)"
        // console.log(e.target.value)
        // var output = document.getElementById('output')
        // output.innerHTML = '<h3 > ' + e.target.value + '</h3>'
}