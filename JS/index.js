
export const shipping = document.querySelector('.currency-show');
export const shipping_option = document.querySelector('.shipping-option');
export const button_save = document.querySelector('#save');





// Data------------------------------------------
let list_product_in_cart = []

// HIDE/SHOW-------------------------------------

export function show(element) {
    element.style.display = "block";
}

export function hide(element) {
    element.style.display = "none";
}

export function shippingOption() {
    shipping.style.color = 'orange';
    show(shipping_option);
    button_save.addEventListener("click", function () {
        hide(shipping_option);
        shipping.style.removeProperty("color");
    })
}

// Display product for customer----------------------------------
function displayProduct() {
    // Remove card -----------------------
    let card = document.querySelector('.card')
    card.remove()
    card = document.createElement('.card')
    let sub_card = document.createElement('.sub-card')

    let product_img = document.createElement('img')
    let description = document.createElement('p')
    let price = document.createElement('p')
    let span = document.createElement('span') 
}
hide(shipping_option)
shipping.addEventListener('click', shippingOption)