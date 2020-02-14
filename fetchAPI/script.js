const btn = document.getElementById('btn')
btn.addEventListener('click', getText)

function getText() {
    // fetch('sample.txt')
    //     .then(function(response) {
    //         // console.log(response)
    //         // console.log(response.text())
    //         return response.text()
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //     })

    //using ES6
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = `<p>${data}</p>`
        }).catch((err) => console.log(err))
}