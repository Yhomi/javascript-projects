// // const s1 = 'Hello'
// // console.log(typeof s1)
// // const s2 = new String('World')
// // console.log(typeof s2)
// // console.log(window)
// // console.log(navigator.appVersion)

// // Object Literals

// const book1 = {
//     title: "Book One",
//     author: "Jon Snow",
//     year: "2010",
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }


// const book2 = {
//     title: "Book Two",
//     author: "Jan Doe",
//     year: "2014",
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// // console.log(book1)
// // console.log(book1.title)
// // console.log(book1.getSummary())
// // console.log(Object.keys(book1))

// // console.log(book2.title)
// // console.log(Object.values(book2))

// // COnstructor

// // function Book(title, author, year) {
// //     // console.log('Book initialized')
// //     this.title = title
// //     this.author = author
// //     this.year = year
// //         // this.getSummary = function() {
// //         //     return `${this.title} was written by ${this.author} in ${this.year}`
// //         // }
// // }

// // // Prototype

// // Book.prototype.getSummary = function() {
// //     return `${this.title} was written by ${this.author} in ${this.year}`
// // }

// // Book.prototype.getAge = function() {
// //     const years = new Date().getFullYear() - this.year
// //     return `${this.title} is ${years} years old`
// // }

// // // Manipulate prototype data
// // // revised : change the year

// // Book.prototype.revised = function(newYear) {
// //     this.year = newYear
// //     this.revise = true
// // }

// // // instantiating an object

// // const book3 = new Book('Book Three', 'Jones Joe', '2015')
// // const book4 = new Book('Book Four', 'Job Din', '2016')

// // console.log(book3)
// // console.log(book4)
// // console.log(book3.title)
// // console.log(book4.author)
// // console.log(book3.getSummary())
// // console.log(book4.getSummary())
// // console.log(book3.getAge())
// // console.log(book4.getAge())
// // book3.revised('2018')
// // console.log(book3)


// // Inheritance

// function Book(title, author, year) {
//     // console.log('Book initialized')
//     this.title = title
//     this.author = author
//     this.year = year
// }
// // Prototype
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }

// function Magazine(title, author, year, month) {
//     // Magazine inheritng the property of Book
//     Book.call(this, title, author, year)
//     this.month = month
// }

// // For magazine to inherit the prototype of Book
// Magazine.prototype = Object.create(Book.prototype)

// // for Magazine to have it's constructor as his own: check console log for what i mean

// Magazine.prototype.constructor = Magazine


// // Instantiate Magazine

// const mag1 = new Magazine('Magazine One', 'John Doe', '2017', 'May')
//     // console.log(mag1)
//     // console.log(mag1.getSummary())

// OBJECT CREATE

// object of protos :: This is basically an object but functions inside it
const bookprotos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    },
}

// Create object1
// const book5 = Object.create(bookprotos)
// assigning property to the object
// book5.title = 'Book Five'
// book5.author = 'Jon Snow'
// book5.year = '2014'
// console.log(book5)

// Create object 2

// const book5 = Object.create(bookprotos, {
//     title: { value: "Book Five" },
//     author: { value: "Jon Snow" },
//     year: { value: '2014' }
// })
// console.log(book5)

// ES6 Classes
class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getAge() {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    }
    revise(newYear) {
        this.year = newYear
        this.revised = true
    }

    // static method: They dont need to be instantiated
    static topBookSold() {
        console.log('Solo leveling')
    }
}
// Instantiating class Book
// const book1 = new Book('Book One', 'Jane Doe', '2013')
// console.log(book1)
//     // console.log(book1.getSummary())
// book1.revise('2018')
// console.log(book1)

// /// to call a static method: you call it tru the class name
// Book.topBookSold()

// Inheriting Classes in ES6: subclasses

class Magazine extends Book {
    constructor(title, author, year, month) {
        // to use the element of class Book (i.e, title,author,year)
        super(title, author, year)
        this.month = month
    }
}

const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'April')
console.log(mag1)
console.log(mag1.getSummary())