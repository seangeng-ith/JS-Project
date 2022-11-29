
//------------------------------------------------
// MENU BAR
//------------------------------------------------

const shipping = document.querySelector('.currency-show');
const shipping_option = document.querySelector('.shipping-option');
const button_save = document.querySelector('#save');
const account = document.querySelector('.account')
const user_account = document.querySelector('.user-account-main')





//-----------------------------------------------
// FUNCTION
//-----------------------------------------------

// HIDE/SHOW-------------------------------------
function show(element){
    element.style.display = "block";
}

function hide(element){
    element.style.display = "none";
}


function shippingOption(){
    shipping.style.color = 'orange'
    show(shipping_option),
    button_save.addEventListener("click",function(){
        hide(shipping_option)
        shipping.style.removeProperty("color")
    })
}

// Main----------------------------------
hide(shipping_option)
shipping.addEventListener("click",shippingOption);
