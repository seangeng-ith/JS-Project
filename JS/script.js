
//------------------------------------------------
// MENU BAR
//------------------------------------------------

const shipping = document.querySelector('.currency-show');
const shipping_option = document.querySelector('.shipping-option');
const button_save = document.querySelector('#save');





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
    show(shipping_option),
    button_save.addEventListener("click",function(){
        hide(shipping_option)
    })
}
// Main----------------------------------
hide(shipping_option)

shipping.addEventListener("click",shippingOption);