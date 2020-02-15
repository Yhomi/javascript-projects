let year = document.getElementById('year')
let butn = document.querySelector('#butn')
let output = document.querySelector('#fact-text')
let factsBody = document.getElementById('fact-body')

butn.addEventListener('click', getNameFacts)

function getNameFacts() {
    Input = year.value
        // console.log(nameInput)
    if (Input != "") {
        fetch('http://numbersapi.com/' + Input + '/year')
            .then((res) => res.text())
            .then((data) => {
                factsBody.style.display = "block"
                output.innerText = data
            }).catch((err) => {
                output.innerText = err
            })
    }

}