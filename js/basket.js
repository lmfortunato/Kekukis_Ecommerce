window.addEventListener ("load", () =>{
    $(".loading").remove();
});

let divBasket = document.getElementById("basket");
let basket = [];


if ("basket" in localStorage && JSON.parse(localStorage.getItem('basket')).length > 0){
    let cart = JSON.parse(localStorage.getItem("basket"));
    for (const p of cart) {
        basket.push(new Product(p.code, p.name, p.price, p.img, p.category, p.quantity))
    }

    for (const shopping of basket){
    $("#basket"). append (`<div class="divBasket"> 
                                <img src='../${shopping.img}' class= "basketImg"/>
                                <p>${shopping.name} $ ${shopping.price}</p>
                                <p id='quantity-${shopping.code}'>${shopping.quantity}</p>
                                    <div class="buttonsBasket">
                                        <button id="${shopping.code}" class="btn btn-info btn-add">+</button>
                                        <button id="${shopping.code}" class="btn btn-warning btn-sub">-</button>
                                        <p id='price-${shopping.code}'>Subtotal: $${shopping.price * shopping.quantity}</p>
                                        <img src='../img/trash.svg' id="${shopping.code}"  class='btn-delete'/>
                                    </div>
                            <div>`)
    }
    let total = document.getElementById("subtotal");
    total.innerHTML= ''
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>$${calculateTotal()}</p>`
    total.appendChild (price)
}else{
    let text = document.createElement('div');
    text.innerHTML = `<h2>Your basket is empty</h2>
                    <a  href="../index.html"><button class="backHome">Back Home</button></a>`
    divBasket.appendChild(text)
}

// CALCULATING SUBTOTAL
const priceProduct = (product) =>{
    const price = document.getElementById(`price-${product.code}`);
    price.innerHTML = '';
    price.innerHTML = `Subtotal: $${product.price * product.quantity}`
}

// ADDING QUANTITY
function addQuantity(){
    let product = basket.find(p => p.code == this.id);
    product.adding(1);
    let quantity = document.getElementById (`quantity-${product.code}`);
    quantity.innerHTML = "";
    quantity.innerHTML = `${parseInt(product.quantity)}`
    //SAVING IN STORAGE
    localStorage.setItem("basket",JSON.stringify(basket));

    let total = document.getElementById ("subtotal");
    total.innerHTML = "";
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>$${calculateTotal()}</p>`
    total.appendChild(price)
    priceProduct(product)
}

$('.btn-add').on("click", addQuantity);

  //SUBSTRACTING QUANTITY
function subQuantity(){
    let product = basket.find(p => p.code == this.id);
    if(product.quantity > 1){
    product.adding(-1);
    let quantity = document.getElementById (`quantity-${product.code}`);
    quantity.innerHTML = "";
    quantity.innerHTML = `${parseInt(product.quantity)}`
      //SAVING IN STORAGE
    localStorage.setItem("basket",JSON.stringify(basket));
    }
    let total = document.getElementById ("subtotal");
    total.innerHTML = "";
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>$ ${calculateTotal()}</p>`
    total.appendChild(price)
    priceProduct(product)
}

$('.btn-sub').click(subQuantity);

// DELETING ITEMS
const deleteItems = (e) =>{
    // Just delete one item
    for (let i=0; i<basket.length; i++) {
        if(parseInt(basket[i].code) == parseInt (e.target.id)){
            basket.splice(i,1);
            break;
        }
    }
    
    localStorage.setItem('basket', JSON.stringify(basket));
    divBasket.innerHTML = '';
    for (const shopping of basket) {
        $("#basket"). append (`<div class="divBasket"> 
                                <img src='../${shopping.img}' class= "basketImg"/>
                                <p>${shopping.name} $ ${shopping.price}</p>
                                <p id='quantity-${shopping.code}'>${shopping.quantity}</p>
                                    <div class="buttonsBasket">
                                        <button id="${shopping.code}" class="btn btn-info btn-add">+</button>
                                        <button id="${shopping.code}" class="btn btn-warning btn-sub">-</button>
                                        <p id='price-${shopping.code}'>Subtotal: $${shopping.price * shopping.quantity}</p>
                                        <img src='../img/trash.svg' id="${shopping.code}"  class='btn-delete'/>
                                    </div>
                            <div>`)
    }
    
    const buttons = document.getElementsByClassName("btn-delete");

    for (const deleteItem of buttons){
        deleteItem.addEventListener("click" , deleteItems);
    }

    $('.btn-add').on("click", addQuantity);
    $('.btn-sub').click(subQuantity);

    if(JSON.parse(localStorage.getItem('basket')).length <= 0){
        let text = document.createElement('div');
        text.innerHTML = `<h2>Your basket is empty</h2>
                        <a href="../index.html"><button class="backHome">Back Home</button></a>`
        divBasket.appendChild(text)
    } 
    let total = document.getElementById ("subtotal");
    total.innerHTML = "";
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>$${calculateTotal()}</p>`
    total.appendChild(price)
}

const buttons = document.getElementsByClassName("btn-delete");

for (const deleteItem of buttons) {
    deleteItem.addEventListener("click" , deleteItems);
}

function calculateTotal () {
    let subtotal = 0;
    for (const product of basket) {
        subtotal += product.subtotal()
    }
    return subtotal;
}