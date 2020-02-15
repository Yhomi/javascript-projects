let NumInput = document.getElementById('inputNum');
let factText = document.querySelector('#fact-text');
let fact = document.querySelector('#fact');

NumInput.addEventListener('input', getFactAjax)

function getFactAjax() {
    let numValue = NumInput.value
        // console.log(numValue)
    let ace = new XMLHttpRequest()
    ace.open('GET', 'http://numbersapi.com/' + numValue);

    ace.onload = function() {
        if (this.status == 200 && numValue != '') {
            // console.log(this.responseText)
            fact.style.display = 'block'
            factText.innerText = this.responseText
        }

    }
    ace.send()

}