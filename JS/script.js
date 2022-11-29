//----------------------------------------------------
//
//----------------------------------------------------

const shipping = document.querySelector('.currency-show');
const shipping_option = document.querySelector('.shipping-option');
const account = document.querySelector('.account')
const user_account = document.querySelector('.user-account-main')
const table = document.querySelector('table')

//BUTTON-------------------------------------------
const button_save = document.querySelector('#save');
const button_create = document.querySelector('#create');
const button_edit = document.querySelector("#edit");
const button_cancel = document.querySelector("#cancel");


//------------------------------------------------
// MENU BAR
//------------------------------------------------






//-----------------------------------------------
// FUNCTION
//-----------------------------------------------

// DATA-------------------------------------------

let product = [
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
    },
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
    },
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
    }
]

// LOCAL STORAGE---------------------------------
function saveProduct() {
    localStorage.setItem("product", JSON.stringify(product));
}

function loadProduct() {
    let productStorage = JSON.parse(localStorage.getItem("questions"));
    if (productStorage !== null) {
        questions = productStorage;
    }
}
// HIDE/SHOW-------------------------------------
function show(element) {
    element.style.display = "block";
}

function hide(element) {
    element.style.display = "none";
}


function shippingOption() {
    shipping.style.color = 'orange';
    show(shipping_option);
    button_save.addEventListener("click", function () {
        hide(shipping_option);
        shipping.style.removeProperty("color");
    })
}

function addProduct() {
    let new_prodcut = {}
    new_prodcut.NAME = document.getElementById('name').value;
    new_prodcut.DESCRIPTION = document.getElementById('description').value;
    new_prodcut.PRICE = document.getElementById('price').value;
    new_prodcut.CURRENCY = document.getElementById('currency').value;
    console.log(new_prodcut)
}
// ADD PRODUCT



// Main----------------------------------
// hide(shipping_option)
// shipping.addEventListener("click", shippingOption);
button_create.addEventListener('click', addProduct)