if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItem = document.getElementsByClassName('btn-danger')
        // console.log(removeCartItem)
    for (var i = 0; i < removeCartItem.length; i++) {
        var button = removeCartItem[i]
        button.addEventListener('click', removeCartItems)
    }
    const qtyInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < qtyInputs.length; i++) {
        var input = qtyInputs[i]
        input.addEventListener('change', QtyChange)
    }
}


function removeCartItems(e) {
    var removeBtn = e.target
    removeBtn.parentElement.parentElement.remove()
    updateTotal()
}

function QtyChange(e) {
    var qtyinput = e.target
        // console.log(qtyinput.value)

    if (isNaN(qtyinput.value) || qtyinput.value <= 0) {
        qtyinput.value = 1
    }
    updateTotal()

}

function updateTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        // console.log(cartItemContainer)
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElem = cartRow.getElementsByClassName('cart-price')[0]
        var qtyElem = cartRow.getElementsByClassName('cart-quantity-input')[0]
            // console.log(priceElem, qtyElem)
        var price = parseFloat(priceElem.innerText.replace('$', ''))
        var qty = qtyElem.value
            // console.log(price * qty)
        total = total + (price * qty)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}