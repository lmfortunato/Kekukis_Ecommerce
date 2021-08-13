// START OBJECTS
$(document).ready(function () {
    const buttons = $(".btnBuy");
    for (const buy of buttons) {
        buy.onclick = buyHandler;
}
});

window.addEventListener ("load", () =>{
    $(".loading").remove();
});

class Product {
    constructor(code, name, price, img, category, quantity) {
        this.code = parseInt(code);
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.img = img;
        this.quantity = quantity || 1;
        this.category = category;
        }

        adding (value) {
            this.quantity += value;
        }

        subtotal () {
        return  this.quantity * this.price;
        }
    }

// START ARRAYS

const products = [];
products.push (new Product (0001, "berries pie", 590, "img/berriesPie.png", "pies" ));
products.push (new Product (0002, "Oreo & nutella cake", 650, "img/dripCake.jpg", "dripCakes"));
products.push (new Product (0003, "Macarons Gift Box", 300, "img/macarons.png", "macarons"));
products.push (new Product (0004, "cookies sandwiches", 150, "img/cookies.jpeg", "cookies"));
products.push (new Product (0005, "decorated cupcakes", 1500, "img/cupcakes.jpg", "cupcakes"));
products.push (new Product (0006, "coco cake", 1500, "img/cocoDisney.png", "customCakes"));
products.push (new Product (0007, "covered oreos", 1500, "img/coveredOreos.png", "cookies"));
products.push (new Product (00010, "Classic cupcakes", 1500, "img/cupcakesClassics.jpg", "cupcakes"));
products.push (new Product (00011, "decorated cookies", 1500, "img/decoratedCookies.jpg", "cookies"));
products.push (new Product (00012, "Ferrero Rocher cake", 1500, "img/ferreroDrip.png", "dripCakes"));
products.push (new Product (00013, "flowers cake", 1500, "img/flowers.png", "customCakes"));
products.push (new Product (00014, "lemon pie", 1500, "img/lemonPie.jpg", "pies"));
products.push (new Product (00015, "kinder cake", 1500, "img/kinderDrip.jpg", "dripCakes"));
products.push (new Product (00016, "macarons x6 message box", 1500, "img/macarons6message.png", "macarons"));
products.push (new Product (00017, "marble cake", 1500, "img/marble.jpg", "customCakes"));
products.push (new Product (0020, "ratatouille cake", 1500, "img/ratatouille.png", "customCakes"));
products.push (new Product (0021, "rose gold cake", 1500, "img/roseGold.png", "customCakes"));
products.push (new Product (0022, "snickers cake", 1500, "img/snickers.jpeg", "dripCakes"));
products.push (new Product (0023, "macarons x7 box", 1500, "img/macarons7.png", "macarons"));
products.push (new Product (0024, "strawberry pie", 1500, "img/strawberryPie.jpg", "pies"));
products.push (new Product (0025, "tiny cupcakes", 1500, "img/tinyCupcakes.jpg", "cupcakes"));
products.push (new Product (0026, "willy wonka cake", 1500, "img/willyWonka.png", "customCakes"));


// INTERACTING WITH THE INTERFACE
// USING JQUERY
for (const product of products) {
    $("#productsUI"). append (`<div class="card"> 
                                <img src="${product.img}" class="imgCards" width="150px">
                                <h2 class="cardTitle">${product.name}</h2>
                                <h4 class="cardSubtitle">$ ${product.price}</h4>
                                <button id="${product.code}" class="btnBuy">Buy</button>
                                <div>`)
}

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
