let NumInput = document.getElementById('inputNum');
let factText = document.querySelector('#fact-text');
let fact = document.querySelector('#fact');

NumInput.addEventListener('input', getFactFetch)

function getFactFetch() {
    let numberInput = NumInput.value
    fetch('http://numbersapi.com/' + numberInput)
        .then((res) => res.text())
        .then((data) => {
            // console.log(data)
            if (numberInput != "") {
                fact.style.display = 'block'
                factText.innerText = data
            }
        }).catch((err) => {
            fact.style.display = 'block'
            factText.innerText = err
        })
}