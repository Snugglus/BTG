if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i <removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {

    })
}

function addtocart() {
        
}

function removeCartItem() {        
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }
}

    function updateCartTotal() {
        var cartItemContainer = documetn.getElementsByClassName('cart-itmes')[0]
        var cartRows = cartItemsContainer.getElementsByClassName('cart-row')
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow =cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
            [0]
            var price = parseFloat(priceElement.innerRext.replace('$'. ''))
            var quantity = quantityElement.value
            total = total + (price = quantity)
        }
        document.getElementsByClassName('cart-total-price')[0].innertext = '$' + total
    }