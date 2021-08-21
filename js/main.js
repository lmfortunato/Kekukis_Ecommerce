// START OBJECTS
$(document).ready(function () {    
$("#filterBtn").click (function (){
    $("#filter").slideDown()
    .delay(3500)
    .slideUp()
})

// GET METHOD
const URLGET = "data/products.json";
    $.get (URLGET, function (data, status){
        if (status == "success"){
            for (const lit of data){
            products.push(new Product(lit.code, lit.name, lit.price, lit.img, lit.category, lit.quantity));
            }
            
    }
    for (const product of products) {
        $("#productsUI"). append (`<div class="card"> 
                                <img src="${product.img}" class="imgCards" width="150px">
                                <h2 class="cardTitle">${product.name}</h2>
                                <h4 class="cardSubtitle">$ ${product.price}</h4>
                                <button id="${product.code}" class="btnBuy">Add to cart</button>
                                <div>`)} 

                                const buttons = $(".btnBuy");
                                for (const buy of buttons) {
                                    buy.onclick = buyHandler;
                            }                           
    })  
});

window.addEventListener ("load", () =>{
    $(".loading").remove();
});

let basket;

if ("basket" in localStorage) {
    basket = JSON.parse(localStorage.getItem("basket"));
    if(basket.length){
        let quantity = document.getElementById('quantity').src="./img/addToCart.svg"
    }
}else{
    basket=[];
}

function buyHandler(e) {
    const productID = e.target.id
    const selected = basket.find(product => product.code == productID);
    if(selected == undefined){
        basket.push(products.find(p => p.code == productID));
    }else{
        //SI SE ENCONTRO AGREGAR UN CANTIDAD
        selected.adding(1);
    }
    
    localStorage.setItem("basket", JSON.stringify(basket));
    if(basket.length){
        let quantity = document.getElementById('quantity').src="./img/addedToCart.svg"
    }
}
