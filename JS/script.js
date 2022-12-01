//----------------------------------------------------
//
//----------------------------------------------------
const shipping = document.querySelector('.currency-show');
const shipping_option = document.querySelector('.shipping-option');
const button_save = document.querySelector('#save');
const detail = document.querySelector('.contain-detail')
const web_title = document.querySelector('title').innerText;
const add_product_form = document.querySelector('#add-product-dialog')

//BUTTON-------------------------------------------
const button_create = document.querySelector('#create');
const button_edit = document.querySelector("#edit");
const button_cancel = document.querySelector("#cancel");
const button_add_product = document.querySelector('.add-product')
const button_exit = document.querySelector('#exit')
const button_buy = document.querySelector('.btn-buy')

// Data------------------------------------------
let product = [
    {
        ID: 1,
        NAME: "Jordan",
        BRAND: 'Nike',
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
        CURRENCY: 'USD',
        IMAGE: "https://d1flfk77wl2xk4.cloudfront.net/Assets/87/496/XXL_p0130849687.jpg",
        QUANTITY: 2
    },
    {
        ID: 1,
        NAME: "Jordan",
        BRAND: 'Nike',
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
        CURRENCY: 'USD',
        IMAGE: "https://d1flfk77wl2xk4.cloudfront.net/Assets/87/496/XXL_p0130849687.jpg",
        QUANTITY: 2


    },
    {
        ID: 1,
        NAME: "Jordan",
        BRAND: 'Nike',
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
        CURRENCY: 'USD',
        IMAGE: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY625_.jpg",
        QUANTITY: 2
    },
    {
        ID: 1,
        NAME: "Jordan",
        BRAND: 'Nike',
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
        CURRENCY: 'USD',
        IMAGE: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY625_.jpg"

    },
    {
        ID: 1,
        NAME: "Jordan",
        BRAND: 'Nike',
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
        CURRENCY: 'USD',
        IMAGE: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY625_.jpg"

    },
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
        CURRENCY: 'USD',
        IMAGE: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY625_.jpg"

    }

]

let new_array = [];


// LOCAL STORAGE---------------------------------
function saveProduct() {
    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("new_array", JSON.stringify(new_array));
}

function loadProduct() {
    let product_storage = JSON.parse(localStorage.getItem("product"));
    let new_array_storage = JSON.parse(localStorage.getItem("new_array"));
    if (product_storage != null) {
        product = product_storage;
    }
    if (new_array_storage != null) {
        new_array = new_array_storage
    }
}

// Create product ----------------------------------------
function onCreate() {
    let new_product = {}
    new_product.NAME = document.getElementById('name').value;
    new_product.SIZE = document.getElementById('size').value;
    new_product.TYPE = document.getElementById('type').value;
    new_product.DESCRIPTION = document.getElementById('description').value;
    new_product.PRICE = document.getElementById('price').value;
    new_product.CURRENCY = document.getElementById('currency').value;
    new_product.IMAGE = document.getElementById('url-image').value;
    product.push(new_product)
    saveProduct()
    renderProduct()
    hide(add_product_form)
}

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

// Display product for customer----------------------------------

function displayProduct() {
    // Remove card -----------------------
    loadProduct()
    let container = document.querySelector('.container')
    let card = document.querySelector('.card')
    card.remove()
    card = document.createElement('div')
    card.className = 'card'
    for (let index in product) {
        let sub_card = document.createElement('div')
        sub_card.id = 'sub-card'
        let image_product = document.createElement('img')

        let name = document.createElement('h4')
        let description = document.createElement('p')
        let price = document.createElement('p')
        let contain_star = document.createElement('div')
        contain_star.className = 'star'

        let star = document.createElement('i')
        star.className = 'material-icons'
        star.textContent = 'star'

        let averrage = document.createElement('p')
        let sub_button = document.createElement('div')
        sub_button.className = 'sub-card-button'

        let button_add_to_cart = document.createElement('button')
        button_add_to_cart.id = index
        button_add_to_cart.addEventListener('click', onAddToCart)

        let button_detail = document.createElement('button')
        button_detail.id = index
        button_detail.addEventListener('click', onDetail)

        // Add text in Element
        let text = ''
        if (product[index].DESCRIPTION.length>58){
            text = '...'
        }
        image_product.src = product[index].IMAGE
        name.textContent = product[index].NAME
        description.textContent = product[index].DESCRIPTION.substring(0,58)+ text
        price.textContent = "$" +product[index].PRICE
        averrage.textContent = 4.5
        button_add_to_cart.textContent = 'Add to card'
        button_detail.textContent = 'Detail'


        sub_button.appendChild(button_detail)

        contain_star.appendChild(star)
        contain_star.appendChild(averrage)

        sub_button.appendChild(button_add_to_cart)
        sub_card.appendChild(image_product)
        sub_card.appendChild(name)
        sub_card.appendChild(description)
        sub_card.appendChild(price)
        sub_card.appendChild(contain_star)
        sub_card.appendChild(sub_button)

        card.appendChild(sub_card)
    }
    container.appendChild(card)

}

function onAddToCart(event) {
    let index = event.target.id
    new_array.push(product[index])
    saveProduct()
    loadProduct()
    CountProductInCart()
}
function onDetail(event) {
    let index = event.target.id
    show(detail)
    let description = document.querySelector('.description-detail').textContent = product[index].DESCRIPTION;
    let price = document.querySelector('.detail-price').textContent = 'USD $' + product[index].PRICE;
    let img = document.createElement('img')
    img.id = "detail-image-product"
    img.src = product[index].IMAGE
    let div = document.querySelector('.detail-image')
    div.appendChild(img)
    let type = document.querySelector('.detail-type').textContent =  'Type : '+ product[index].TYPE;
    let size = document.querySelector('.detail-size').textContent = 'Size :' +product[index].SIZE;
    let brand = document.querySelector('.detail-brand').textContent = 'Brand :'+ product[index].BRAND;
    
    let count = product[index].QUANTITY
    if ( product[index].QUANTITY === null ){
        count = 0
    }
    let quantity = document.querySelector('.detail-quantity').textContent = 0

    button_exit.addEventListener('click',function(){
        hide(detail)
        img.remove()
    })
}

function onRemove(event) {
    let index = event.target.id;
    new_array.splice(index, 1);
    console.log(index)
    saveProduct();
    DisplayShoppingCart();
    CountProductInCart()
}

function CountProductInCart() {
    let product_in_cart = document.querySelector('#product-in-cart');
    product_in_cart.textContent = new_array.length
}


// Display shopping cart list ----------------------------------
function DisplayShoppingCart() {
    loadProduct()
    //Remove container-shopping-cart-----------------------------
    let header = document.querySelector('.header-shopping-cart')
    let contain_table = document.querySelector('.contain-table')

    //Remove item -------------------------------
    let item = document.querySelector('.item')
    item.remove()
    item = document.createElement('p')
    item.className = 'item'

    let count = new_array.length
    if (count < 2) {
        item.textContent = count + ' item'
    }
    else {
        item.textContent = count + ' items'
    }

    //Remove and Create new table-------------------------------
    let table = document.querySelector('table')
    table.remove()
    table = document.createElement('table');

    let thead = document.createElement('thead');

    let prodcut_and_name = document.createElement('td');
    prodcut_and_name.textContent = 'Product NAME & Details';

    let price_title = document.createElement('td');
    price_title.textContent = 'Price';

    let quantity_title = document.createElement('td');
    quantity_title.textContent = 'Quantity';

    let total_title = document.createElement('td');
    total_title.textContent = 'Total';

    let td = document.createElement('td');

    header.appendChild(item)

    thead.appendChild(prodcut_and_name)
    thead.appendChild(price_title)
    thead.appendChild(quantity_title)
    thead.appendChild(total_title)
    thead.appendChild(td)
    table.appendChild(thead)
    contain_table.appendChild(table)
    let all_product_price = 0
    for (let index in new_array) {

        let tr = document.createElement('tr')
        let product_name_details = document.createElement('td')
        product_name_details.className = 'product-name-details'

        let product_img = document.createElement('img')
        product_img.src = new_array[index].IMAGE

        let div = document.createElement('div')
        let name = document.createElement('h4')
        name.textContent = new_array[index].NAME

        let description = document.createElement('p')
        description.textContent = new_array[index].DESCRIPTION

        let type = document.createElement('p')
        type.textContent = 'Type :'+new_array[index].TYPE
        
        let brand = document.createElement('p')
        brand.textContent = 'Brand :'+new_array[index].BRAND

        let size = document.createElement('p')
        size.textContent = 'size' + new_array[index].SIZE

        let price = document.createElement('td')
        price.textContent = "$" +new_array[index].PRICE

        let Quantity = document.createElement('td')
        Quantity.textContent = new_array[index].QUANTITY

        let total_one_product = document.createElement('td')
        total_one_product.textContent = new_array[index].PRICE

        let btn = document.createElement('td')
        let btn_remove = document.createElement('button')
        btn_remove.textContent = 'Remove'
        btn_remove.id = index
        btn_remove.addEventListener('click', onRemove)
        btn.appendChild(btn_remove)

        all_product_price += new_array[index].PRICE * new_array[index].QUANTITY
        product_name_details.appendChild(product_img)
        product_name_details.appendChild(div)
        div.appendChild(name)
        div.appendChild(description)
        div.appendChild(type)
        div.appendChild(brand)
        div.appendChild(size)

        tr.appendChild(product_name_details)
        tr.appendChild(price)
        tr.appendChild(Quantity)
        tr.appendChild(total_one_product)
        tr.appendChild(btn)
        table.appendChild(tr)
    }
    // Create totale price----------------------------------
    let text_total = document.querySelector(".total-price")

    let span = document.querySelector('.span')
    span.remove()
    span = document.createElement('span')
    span.className = 'span'

    span.textContent = all_product_price

    text_total.appendChild(span)
}



// Remove product from the list---------------------------------
function removeProduct(event) {
    let index = event.target.id;
    product.splice(index, 1);
    saveProduct();
    renderProduct();
}

function onSave() {
    hide(shipping_option)
}

function onCancel() {
    hide(add_product_form)
}
// Edit the product that you select----------------------------
function editProduct(event) {
    show(add_product_form)
    button_create.style.display = 'none';
    button_edit.style.display = 'block';
    let index = event.target.id;
    document.querySelector('#name').value = product[index].NAME
    document.querySelector('#description').value = product[index].DESCRIPTION
    document.querySelector('#price').value = product[index].PRICE
    document.querySelector('#size').value = product[index].SIZE
    document.querySelector('#type').value = product[index].TYPE
    document.querySelector('#currency').value = product[index].CURRENCY

    button_edit.addEventListener('click', function () {
        onEdit(index)
        index = null
    })
}



function onEdit(index) {
    let new_product = {}
    let name = document.querySelector('#name').value;
    let type = document.querySelector('#type').value;
    let size = document.querySelector('#size').value;
    let description = document.querySelector('#description').value;
    let price = document.querySelector('#price').value;
    let currency = document.querySelector('#currency').value;
    let img = document.querySelector('#url-image').value;

    new_product.NAME = name
    new_product.DESCRIPTION = description
    new_product.PRICE = price
    new_product.SIZE = size
    new_product.TYPE = type
    new_product.CURRENCY = currency
    new_product.IMAGE = img
    product[index] = (new_product)
    saveProduct()
    renderProduct()
    hide(add_product_form)
}



function onAddProduct() {
    show(add_product_form)
    let name = document.querySelector('#name').value = "";
    let type = document.querySelector('#type').value = "";
    let size = document.querySelector('#size').value = "";
    let description = document.querySelector('#description').value = "";
    let price = document.querySelector('#price').value = "";
    let currency = document.querySelector('#currency').value = "";
    let img = document.querySelector('#url-image').value = "";

    button_edit.style.display = 'none'
    button_create.style.display = 'block'
}


function renderProduct() {
    loadProduct()
    // Remove the table 
    let table_list = document.querySelector("#table-list-product");
    table_list.remove();
    table_list = document.createElement("table");
    table_list.id = "table-list-product"
    let container = document.querySelector('.container-seller')

    //Create new thead and td 
    let thead = document.createElement('thead')
    let img_title = document.createElement('td')
    let size_title = document.createElement('td')
    let type_title = document.createElement('td')
    let name_title = document.createElement('td')
    let brand_title = document.createElement('td')
    let description_title = document.createElement('td')
    let price_title = document.createElement('td')
    let action_title = document.createElement('td')

    // Add text in each new td-------------------------------------------------
    img_title.textContent = "IMAGE"
    size_title.textContent = "SIZE"
    type_title.textContent = "TYPE"
    brand_title.textContent = 'BRAND'
    name_title.textContent = "NAME"
    description_title.textContent = 'DESCRIPTION'
    price_title.textContent = 'PRICE'
    action_title.textContent = "ACTION"

    // Append all the td in thead---------------------------------------------
    thead.appendChild(img_title)
    thead.appendChild(size_title)
    thead.appendChild(type_title)
    thead.appendChild(name_title)
    thead.appendChild(brand_title)
    thead.appendChild(description_title)
    thead.appendChild(price_title)
    thead.appendChild(action_title)

    table_list.append(thead)
    for (let index in product) {

        //Create new tr and td----------------------------------------------------------------
        let row = document.createElement('tr');
        let img_td = document.createElement('td')
        let size_td = document.createElement('td')
        let type_td = document.createElement('td')
        let name_td = document.createElement('td')
        let brand_td = document.createElement('td')
        let description_td = document.createElement('td')
        let price_td = document.createElement('td')
        let action = document.createElement('td')
        let image_product = document.createElement('img')
        let div = document.createElement('div')
        let edit_button = document.createElement('button')
        let delete_button = document.createElement('button')

        image_product.src = product[index].IMAGE
        size_td.textContent = product[index].SIZE
        type_td.textContent = product[index].TYPE
        name_td.textContent = product[index].NAME
        brand_td.textContent = product[index].BRAND
        
        let word = product[index].DESCRIPTION
        if (word.length>100){
            word = product[index].DESCRIPTION.substring(0,100)+ '...'
            
        }
        description_td.textContent = word
        price_td.textContent = "$" + product[index].PRICE
        delete_button.textContent = 'Delete'
        edit_button.textContent = 'Edit'

        // Add id  and class on button delete and edit 
        delete_button.addEventListener('click', removeProduct)
        delete_button.className = 'delete'
        delete_button.id = index
        edit_button.addEventListener('click', editProduct)
        edit_button.className = 'edit'
        edit_button.id = index

        img_td.appendChild(image_product)
        div.appendChild(edit_button)
        div.appendChild(delete_button)
        action.appendChild(div)
        row.appendChild(img_td)
        row.appendChild(size_td)
        row.appendChild(type_td)
        row.appendChild(name_td)
        row.appendChild(brand_td)
        row.appendChild(description_td)
        row.appendChild(price_td)
        row.appendChild(action)
        table_list.appendChild(row)
    }
    container.appendChild(table_list)
}
// ADD PRODUCT

// Main------------------------------------------------------------------------------
if (web_title === "Seller") {
    renderProduct()
    button_create.addEventListener('click', onCreate)
    button_add_product.addEventListener('click', onAddProduct)
    button_cancel.addEventListener('click', onCancel)
}
if (web_title === 'Shopping Mall') {
    displayProduct()
}
if (web_title === 'Cart Page') {
    DisplayShoppingCart()

}

loadProduct()
hide(shipping_option)

CountProductInCart()
// addeventlistener button -------------------------------------------------------

shipping.addEventListener("click", shippingOption);
button_save.addEventListener('click', onSave)


