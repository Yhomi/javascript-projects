const companies = [
    { name: "Company One", category: "Finance", start: "1981", end: "2001" },
    { name: "Company Two", category: "Sales", start: "1990", end: "2011" },
    { name: "Company Three", category: "Marketing", start: "1980", end: "2021" },
    { name: "Company Four", category: "Sales", start: "1970", end: "2002" },
    { name: "Company Five", category: "Sales", start: "1881", end: "2041" },
    { name: "Company Six", category: "Marketing", start: "1996", end: "2016" },
    { name: "Company Seven", category: "Finance", start: "1750", end: "2070" },
    { name: "Company Eight", category: "Finance", start: "1993", end: "3001" },
    { name: "Company Nine", category: "Sales", start: "2010", end: "2301" },
    { name: "Company Ten", category: "Finance", start: "2005", end: "2020" },
]
const ages = [23, 24, 45, 67, 7, 9, 10, 89, 90, 98, 76, 65, 54, 43, 18, 12, 13, 14, 17, 11, 19, 32, 21, 33, 35]

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name)
// }

// Higher Order Array methods

//forEach

// companies.forEach(function(company) {
//     console.log(company.name)
// })

//filter
// filtering through the age for above 21

// how to filter an array using conventional for loop method
// let canDrink = []
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink)

// const canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return true
//     }
// })
// console.log(canDrink)

// using ES6

const canDrink = ages.filter(age => age >= 21)
    // console.log(canDrink)

// get companies with finanace categories

//using Es5
const financeComp = companies.filter(function(fin) {
        if (fin.category == "Finance") {
            return true
        }
    })
    // console.log(financeComp)

// get companies with sales categories
const sales = companies.filter(fin => fin.category === "Sales")
    // console.log(sales)

// get companies that starts in the nineties

const comps = companies.filter(fil => (fil.start >= 1900 && fil.start <= 1999))
    // console.log(comps)

// get companies that lasted more than 30 years
const thirty = companies.filter(fil => (fil.end - fil.start >= 30))
    // console.log(thirty)


//map
// create array of company names
// const CompanyName = companies.map(function(Cname) {
//     return Cname.name
// })
// console.log(CompanyName)

//get company names with their start to end date

// const Comp_Id = companies.map(function(company) {
//     return `${company.name} [${company.start}-${company.end}]`
// })
// console.log(Comp_Id)

// get companies name and their categories

// const comp_name = companies.map(company => `${company.name} [${company.category}]`)
// console.log(comp_name)

// get the squreroot of each ages and round to 2 dp
const ageSqrt = ages.map(age => Math.round(Math.sqrt(age) * 100) / 100)
console.log(ageSqrt)
const ageMap = ages
    .map(age => Math.round(Math.sqrt(age) * 100) / 100)
    .map(age => age * 2)
console.log(ageMap)

//sort
//reduce