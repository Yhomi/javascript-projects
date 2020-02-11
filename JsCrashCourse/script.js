// alert("connected");
/*
console.log("connected");
console.error('Error Message');
console.warn("This is a warning");
*/
// Variables
// var,let, const
// LET
// let score;
// score = 31;
// console.log(score);
// // CONST
// const age = 30;
// console.log(age);

// DATATYPES
//String, Numbers, Boolean, null,undefined
// String
// const name = 'Ace'
//     // Number
// const age = 30;
// // Boolean
// const isCool = true
//     // Null
// const x = null
// const y = undefined
// let z // z is also undefined
//     // console.log(typeof z)

// // Concatenation
// console.log('My name is ' + name + ' and my age is ' + age)
//     // Template String
// const human = (`My name is ${name} and my age is ${age}`)
// console.log(human)
// const str = "Hello World!!!"
// console.log(str.length) // give the length of a string
// console.log(str.toUpperCase()) // convert a string to uppercase
// console.log(str.toLowerCase()) // convert a string to lower case
// console.log(str.substring(0, 5)) // split a string to the specified length
// console.log(str.substring(0, 5).toUpperCase()) // joining two method
// console.log(str.split('')) // convert a string to an array. it will an element into an array based on what you specify into the split
// let s = "ict, sales, finance, hr, kitchen "
// console.log(s.split(', '))

// // Arrays
// const number = new Array(1, 2, 3, 4) // old method
// console.log(number)
// const color = ['red', 'blue', 'yellow', 4, 5, true, false] // js array can hold different datatypes

// // Accessing arrays
// console.log(color[1])
//     // Adding values to the end
// color[7] = 'green'
// color.push('Grey') // add to the end
// color.unshift("black") // add to the begining
// color.pop() // remove the last item in an array
// console.log(color)
// console.log(Array.isArray(color))
// console.log(color.indexOf('yellow'))

// Object
// const person = {
//     firstname: 'Jon',
//     lastname: 'Doe',
//     age: 25,
//     hobbies: ['gaming', 'swimming', 'reading', 'traveling'],
//     Address: {
//         street: 'No2, unknown street',
//         city: 'Knowhere',
//         state: 'space'
//     }
// }
// console.log(person)
//     // alert(person)
//     // Accessing object
// console.log(person.firstname) // a object property
// console.log(person.firstname, person.age) // two object property
// console.log(person.hobbies[1]) // an array property
// console.log(person.Address.city) // accessing an object within an object property
//     // Destructuring
// const { firstname, lastname, Address: { city } } = person
// console.log(city)
//     // Add property
// person.email = 'jondoe@test.com'
// console.log(person)

// Array of objects
const todos = [{
        id: 1,
        task: "Php projects",
        isComplete: false
    },
    {
        id: 2,
        task: "Learning PHP OOP",
        isComplete: false
    },
    {
        id: 3,
        task: "Html projects",
        isComplete: true
    },
    {
        id: 4,
        task: "Laravel projects",
        isComplete: false
    },
    {
        id: 5,
        task: "Javascript dom",
        isComplete: true
    },
];
// console.log(todos[2].task)

// JSON
const todosJson = JSON.stringify(todos) // converts object to JSON
    // console.log(todosJson)

// For Loop
for (let i = 0; i < 10; i++) {
    // console.log(`For loop number: ${i}`)
}

//  While Loop
let i = 0;
while (i < 10) {
    // console.log(`While loop number: ${i}`)
    i++
}
// Loop through array
for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i].task)
}
for (let ace of todos) {
    // console.log(ace.id)
}

// Higher Order Array loop

// ForEach
todos.forEach(function(ace) {
    // console.log(ace.isComplete)
})

//Map: loops through an array and return the value in array format
const todoTask = todos.map(function(ace) {
        return ace.task;
    })
    // console.log(todoTask)

// Filter
// const todoCompleted = todos.filter(function(ace) {
//     return ace.isComplete === false
// })
// console.log(todoCompleted)

// Tacking other loops together
// This example will return an array of todos that are completed and state the task
const todoCompleted = todos.filter(function(ace) {
        return ace.isComplete === true
    }).map(function(todo) {
        return todo.task
    })
    // console.log(todoCompleted)

// Conditionals
// const x = 15;
// const y = 10
// if (x == 10) {
//     console.log('x is 10')
// } else if (x === 10) {
//     console.log('x is 10')
// } else if (x > 10) {
//     console.log('x is greater than 10')
// } else {
//     console.log('x is less than 10')
// }
// if (x > 4 || y < 8) {
//     console.log('x is more than 4 or y is less than 8')
// } 
// if (x > 3 && y > 8) {
//     console.log('x is more than 5 and y is more than 8')
// }

// Tenary operator
// ? means then
// : means 
// const x = 20
// const color = x > 5 ? 'red' : 'blue'
//     // console.log(color)

// // Switch statement
// switch (color) {
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is not red nor blue')
//         break
// }

// Functions

// function addNum(num1, num2) {
//     console.log(num1 + num2)
// }
// addNum(4, 6)
function multiplyNum(num1, num2) {
    return num1 * num2
}
// console.log(multiplyNum(2, 3))

// Arrow functions
// syntax (param=>return value)
const SubNum = (num1, num2) => {
        console.log(num2 - num1)
    }
    // SubNum(6, 9)

// return method
const AddNum = (a, b) => a + b
    // console.log(AddNum(4, 3))
const oneVal = num1 => num1 + 10
    // console.log(oneVal(5))

// todos.forEach((todo) => console.log(todo))
// todos.forEach((ace => console.log(ace.task)))

// OOP

// constructor
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // adding functions to a constructor
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = () => `${this.firstName} ${this.lastName}`
// }
// // Prototype : this allows any function (method to be declared outside the constructor)
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear()
// }

// Person.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     // Instantiating
// const person1 = new Person('Jon', 'Doe', '10-10-1990');
// const person2 = new Person('Jane', 'Moe', '12-12-1990');
// console.log(person1)
// console.log(person1.firstName)
// console.log(person2.lastName)
// console.log(person1.dob)
// console.log(person1.getBirthYear())
// console.log(person2.getFullName())

// ES6 classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    FullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person('Jon', 'Snow', '05-17-1990')
const person2 = new Person('Jane', 'Doe', '08-20-2000')
console.log(person1.firstName)
console.log(person2.lastName)
console.log(person1)
console.log(person2.getBirthYear())
console.log(person1.FullName())