// START OBJECTS
$(document).ready(function () {    
$("#filterBtn").click (function (){
    $("#filter").slideToggle()
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
                            $(".btnBuy").click (function (){
                                swal("Product Added to cart!", "" , "success");
                            })                          
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

if(basket.length){
    let quantity = document.getElementById('quantity').src="./img/addedToCart.svg"
}
else {
    let quantity = document.getElementById('quantity').src="./img/addToCart.svg"
}

// CONTACT SECTION
$('#contact-form').submit(function (e){
    e.preventDefault();   
    const inputs = $("#contact-form :input");
    const data = {name: inputs [0].value,
                email: inputs [1].value,
                message: inputs[2].value}
    $.post ("https://jsonplaceholder.typicode.com/posts", data, function (data, status){
        //HERE IS GOING TO BE THE POST INFORMATION
        console.log(data)
    })
    if (e.target.elements.name.value !== "" && e.target.elements.email.value !== "" && e.target.elements.message.value !== ""){
        $("#modalIndex").append(`<div class="modal fade modalContent modalIndex" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Your message has been sent</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        <div class="modal-body">
                                            We will contact you shortly <br>
                                            Keep track of your mailbox.
                                            
                                        <div class="modal-footer">
                                        <button type="button" class="purchase btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>`);
                                $(".purchase").click (function(){
                                    e.target.elements.name.value = '';
                                    e.target.elements.email.value = '';
                                    e.target.elements.message.value = '';
                                })
    }
    else {
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    }
    
});