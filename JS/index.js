
export const shipping = document.querySelector('.currency-show');
export const shipping_option = document.querySelector('.shipping-option');
export const button_save = document.querySelector('#save');



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
hide(shipping_option)
shipping.addEventListener('click', shippingOption)