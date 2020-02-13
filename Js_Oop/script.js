// const s1 = 'Hello'
// console.log(typeof s1)
// const s2 = new String('World')
// console.log(typeof s2)
// console.log(window)
// console.log(navigator.appVersion)

// Object Literals

const book1 = {
    title: "Book One",
    author: "Jon Snow",
    year: "2010",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}


const book2 = {
    title: "Book Two",
    author: "Jan Doe",
    year: "2014",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// console.log(book1)
// console.log(book1.title)
// console.log(book1.getSummary())
// console.log(Object.keys(book1))

// console.log(book2.title)
// console.log(Object.values(book2))

// COnstructor