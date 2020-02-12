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

    const addCart = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addCart.length; i++) {
        var cart_item = addCart[i]
        cart_item.addEventListener('click', addToCart)

    }
    const purchase = document.getElementsByClassName('btn-purchase')[0].addEventListener('click', PurchaseClick)

}

function addToCart(e) {
    // console.log(e.target)

    var btn = e.target
    var shop_item = btn.parentElement.parentElement
        // console.log(shop_item)
    var title = shop_item.getElementsByClassName('shop-item-title')[0].innerText
        // console.log(title)
    var item_price = shop_item.getElementsByClassName('shop-item-price')[0].innerText
        // console.log(item_price)
    var image = shop_item.getElementsByClassName('shop-item-image')[0].src
        // console.log(image)
    addItemToCart(title, item_price, image)
    updateTotal()
}

function addItemToCart(title, item_price, image) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartBox = document.getElementsByClassName('cart-items')[0]
    var cartName = cartBox.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartName.length; i++) {
        if (cartName[i].innerText == title) {
            alert("Thiis Item is already in your cart")
            return
        }
    }
    var cartContent = `
                <div class="cart-item cart-column">
                <img class="cart-item-image" src="${image}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${item_price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
            </div> `
    cartRow.innerHTML = cartContent

    cartBox.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItems)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', QtyChange)
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

function PurchaseClick() {
    alert('Thank You for shopping with us')
    const cart_items = document.getElementsByClassName('cart-items')[0]
    while (cart_items.hasChildNodes()) {
        cart_items.removeChild(cart_items.firstChild)
    }
    updateTotal()
}