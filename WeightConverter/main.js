var input = document.getElementById('num')

input.addEventListener('input', getWeight)

function getWeight(e) {
    let pound = e.target.value
    let a = Math.round((pound / 0.0022046) * 10000) / 10000
    let b = Math.round((pound / 2.2046) * 10000) / 10000;
    let c = Math.round((pound * 16) * 10000) / 10000;

    document.getElementById("output").innerHTML = a
    document.getElementById("kgoutput").innerHTML = b
    document.getElementById("Ozoutput").innerHTML = b
}