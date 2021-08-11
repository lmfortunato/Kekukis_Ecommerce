// START OBJECTS

class Product {
    constructor(code, name, price, img, category) {
        this.code = parseInt(code);
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.img = img;
        this.quantity = 0;
        this.category = category;
        }

        sell (quantity) {
            if (this.quantity >= quantity) {
                this.quantity -= quantity;
            }
        }

        replenish (quantity) {
            this.quantity += quantity;
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

for (const product of products) {
    // CREATING THE TAG
    let divProduct = document.createElement("div");
    divProduct.classList.add("card");
    // MODIFYING THE CONTENT
    divProduct.innerHTML = `<img src="${product.img}" class="imgCards" width="150px">
                            <h2 class="cardTitle">${product.name}</h2>
                            <h4 class="cardSubtitle">$ ${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Buy</button>`;
    // ADDING TO INTERFACE
    document.getElementById("productsUI").appendChild(divProduct);
}

const buttons = document.getElementsByClassName("btnBuy");
for (const buy of buttons) {
    buy.addEventListener("click" , buyHandler);
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
    const selected = products.find(product => product.code == e.target.id);
    basket.push(selected);
    localStorage.setItem("basket", JSON.stringify(basket));
    if(basket.length){
        let quantity = document.getElementById('quantity').src="./img/addedToCart.svg"
    }
}

// START FILTER
let filter = document.getElementById ("filter")
filter.innerHTML = `<button id='macarons' class='btnFilter'>Macarons</button>
                    <button id='pies' class='btnFilter'>Pies</button>
                    <button id='dripCakes' class='btnFilter'>Drip Cakes</button>
                    <button id='cupcakes' class='btnFilter'>Cupcakes</button>
                    <button id='customCakes' class='btnFilter'>Custom Cakes</button>
                    <button id='cookies' class='btnFilter'>Cookies</button>`;

const filterButtons = document.getElementsByClassName('btnFilter');
for (const buy of filterButtons) {
    buy.addEventListener("click" , filteredProducts);
}

function filteredProducts (e){
    let filtered = products.filter (obj => obj.category == e.target.id)

    let filter = document.getElementById ("filter")
    filter.innerHTML =  `<button id='back'>Back to list</button>
                        <button id='macarons' class='btnFilter'>Macarons</button>
                        <button id='pies' class='btnFilter'>Pies</button>
                        <button id='dripCakes' class='btnFilter'>Drip Cakes</button>
                        <button id='cupcakes' class='btnFilter'>Cupcakes</button>
                        <button id='customCakes' class='btnFilter'>Custom Cakes</button>
                        <button id='cookies' class='btnFilter'>Cookies</button>`;

    // BACK BUTTON FUNCTIONALITY
    let btnBack = document.getElementById("back")
    btnBack.addEventListener("click", (e) => {
    filtered = products;
    let filter = document.getElementById("filter")
    filter.innerHTML = `<button id='macarons' class='btnFilter'>Macarons</button>
                        <button id='pies' class='btnFilter'>Pies</button>
                        <button id='dripCakes' class='btnFilter'>Drip Cakes</button>
                        <button id='cupcakes' class='btnFilter'>Cupcakes</button>
                        <button id='customCakes' class='btnFilter'>Custom Cakes</button>
                        <button id='cookies' class='btnFilter'>Cookies</button>`;

    const filterButtons = document.getElementsByClassName('btnFilter');
    for (const buy of filterButtons) {
    buy.addEventListener("click" , filteredProducts);
    }

    for (const product of filtered) {
        const divCard = document.createElement("div");
        divCard.className = "card"
        divCard.innerHTML = `<img src="${product.img}" class="imgCards" width="150px">
                            <h2 class="cardTitle">${product.name}</h2>                         
                            <h4 class="cardSubtitle">$ ${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Buy</button>`;
                            divContainer.appendChild(divCard)
    }
    let buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    })
    let btnFiltered = document.getElementsByClassName("btnFilter")
    for (const filter of btnFiltered) {
        filter.addEventListener("click", filteredProducts)
    }
    // BTN FUNCTIONALITY
    const divContainer = document.getElementById("productsUI")
    divContainer.innerHTML = ""

    for (const product of filtered) {
        const divCard = document.createElement("div");
        divCard.className = "card"
        divCard.innerHTML = `<img src="${product.img}" class="imgCards" width="150px">
                            <h2 class="cardTitle">${product.name}</h2>
                            <h4 class="cardSubtitle">$ ${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Buy</button>`;
                            divContainer.appendChild(divCard)
    }

    const buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
}
console.log (filteredProducts)

// REPLENISH AND SELL

products [0].replenish(30);
console.log (products [0]);
products [0].sell (10);
console.log (products [0]);

products [1].replenish(50);
console.log (products [1])
products [1].sell (30);
console.log (products [1]);

products [2].replenish(45);
console.log (products [2]);
products [2].sell (25);
console.log (products [2]);