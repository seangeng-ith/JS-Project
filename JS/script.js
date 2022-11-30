//----------------------------------------------------
//
//----------------------------------------------------
import {
    shipping,
    shipping_option,
    button_save,
    show,
    hide,
    shippingOption
} from "./index.js"


const add_product_form = document.querySelector('#add-product-dialog')

//BUTTON-------------------------------------------
const button_create = document.querySelector('#create');
const button_edit = document.querySelector("#edit");
const button_cancel = document.querySelector("#cancel");
const button_add_product = document.querySelector('.add-product')

//------------------------------------------------
// MENU BAR
//------------------------------------------------


let product = [
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
    },
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
    },
    {
        ID: 1,
        NAME: "Jordan",
        DESCRIPTION: "Blue size 7",
        PRICE: 19,
        SIZE: 7,
        TYPE: 'shoes',
    }
]

console.log(product)
// LOCAL STORAGE---------------------------------
function saveProduct() {
    localStorage.setItem("product", JSON.stringify(product));
}

function loadProduct() {
    let productStorage = JSON.parse(localStorage.getItem("product"));
    product =productStorage ;
}

function onCreate() {
    let new_product = {}
    new_product.NAME = document.getElementById('name').value;
    new_product.SIZE = document.getElementById('size').value;
    new_product.TYPE = document.getElementById('type').value;
    new_product.DESCRIPTION = document.getElementById('description').value;
    new_product.PRICE = document.getElementById('price').value;
    new_product.CURRENCY = document.getElementById('currency').value;
    console.log(new_product)
    product.push(new_product)
    product.push(new_product)
    renderProduct()
    saveProduct()
    hide(add_product_form)
}
function removeProduct(event) {

    let index = event.target.id;
    product.splice(index, 1);
    console.log(index)
    saveProduct();
    renderProduct();
}
function editProduct(){
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

    button_edit.addEventListener('click', function(){
        onEdit(index)
    })
}
function onCancel() {
    hide(add_product_form)
}
function onEdit(index) {
    let new_product = {}
    let name = document.querySelector('#name').value;
    let type = document.querySelector('#type').value;
    let size = document.querySelector('#size').value;
    let description = document.querySelector('#description').value;
    let price = document.querySelector('#price').value;
    let currency = document.querySelector('#currency').value;
    
    new_product.NAME = name
    new_product.DESCRIPTION = description
    new_product.PRICE = price
    new_product.SIZE = size
    new_product.TYPE = type
    new_product.CURRENCY = currency
    product.push(new_product[index])
    hide(add_product_form)
}
function onSave() {
    hide(shipping_option)
}
function onAddProduct() {
    show(add_product_form)
    button_edit.style.display = 'none'
    button_create.style.display = 'block'


}
function renderProduct() {
    // Remove the table 
    let table_list = document.querySelector("#table-list-product");
    table_list.remove();
    table_list = document.createElement("table");
    table_list.id = "table-list-product"
    let container = document.querySelector('.container-seller')

    //Create new thead and td 
    let thead = document.createElement('thead')
    let id_title = document.createElement('td')
    let img_title = document.createElement('td')
    let size_title = document.createElement('td')
    let type_title = document.createElement('td')
    let name_title = document.createElement('td')
    let description_title = document.createElement('td')
    let price_title = document.createElement('td')
    let action_title = document.createElement('td')

    // Add text in each new td-------------------------------------------------
    id_title.textContent = 'ID'
    img_title.textContent = "IMAGE"
    size_title.textContent = "SIZE"
    type_title.textContent = "TYPE"
    name_title.textContent = "NAME"
    description_title.textContent = 'DESCRIPTION'
    price_title.textContent = 'PRICE'
    action_title.textContent = "ACTION"

    // Append all the td in thead---------------------------------------------
    thead.appendChild(id_title)
    thead.appendChild(img_title)
    thead.appendChild(size_title)
    thead.appendChild(type_title)
    thead.appendChild(name_title)
    thead.appendChild(description_title)
    thead.appendChild(price_title)
    thead.appendChild(action_title)

    table_list.append(thead)
    for (let index in product) {

        //Create new tr and td----------------------------------------------------------------
        let row = document.createElement('tr');
        let id_td = document.createElement('td')
        let img_td = document.createElement('td')
        let size_td = document.createElement('td')
        let type_td = document.createElement('td')
        let name_td = document.createElement('td')
        let description_td = document.createElement('td')
        let price_td = document.createElement('td')
        let action = document.createElement('td')
        let image_product = document.createElement('img')
        let div = document.createElement('div')
        let edit_button = document.createElement('button')
        let delete_button = document.createElement('button')

        id_td.textContent = index
        image_product.src = "../Images/men-nike-air-jordan-1-mid-red.jpg"
        size_td.textContent = product[index].SIZE
        type_td.textContent = product[index].TYPE
        name_td.textContent = product[index].NAME
        description_td.textContent = product[index].DESCRIPTION
        price_td.textContent = product[index].PRICE
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
        row.appendChild(id_td)
        row.appendChild(img_td)
        row.appendChild(size_td)
        row.appendChild(type_td)
        row.appendChild(name_td)
        row.appendChild(description_td)
        row.appendChild(price_td)
        row.appendChild(action)
        table_list.appendChild(row)
    }
    container.appendChild(table_list)
}
// ADD PRODUCT



// Main------------------------------------------------------------------------------
loadProduct()
renderProduct()
hide(shipping_option)
shipping.addEventListener("click", shippingOption);

// addeventlistener button -------------------------------------------------------
button_add_product.addEventListener('click', onAddProduct)
button_create.addEventListener('click', onCreate)
button_save.addEventListener('click', onSave)
button_cancel.addEventListener('click', onCancel)
