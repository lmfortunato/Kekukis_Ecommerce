// START OBJECTS

class Product {
    constructor(code, name, price, img) {
        this.code = parseInt(code);
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.img = img;
        this.quantity = 0;
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
products.push (new Product (0001, "carrot cake", 590, "img/carrotCake.png" ));
products.push (new Product (0002, "drip cake", 650, "img/dripCake.jpg"));
products.push (new Product (0003, "macarons", 300, "img/macarons.png"));
products.push (new Product (0004, "cookies", 150, "img/cookies.jpeg"));
products.push (new Product (0005, "cupcakes", 1500, "img/cupcakes.jpg"));

console.log (products);

// INTERACTING WITH THE INTERFACE

for (const product of products) {
    // CREATING THE TAG
    let divProduct = document.createElement("div");
    divProduct.classList.add("card");
    // MODIFYING THE CONTENT
    divProduct.innerHTML = `<img src="${product.img}" class="imgCards" width="150px">
                            <h2 class="cardTitle">${product.name}</h2>
                            <br>
                            <h4 class="cardSubtitle">$ ${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Buy</button>`;
    // ADDING TO INTERFACE
    document.getElementById("productsUI").appendChild(divProduct);
}

const buttons = document.getElementsByClassName("btnBuy");

const basket = [];

function buyHandler(e) {
    const selected = products.find(product => product.code == e.target.id);
    basket.push(selected);
    console.log(basket);
    localStorage.setItem("basket", JSON.stringify(basket));
    const divBasket = document.getElementById("basket");
    divBasket.innerHTML = "";
    for (const shopping of basket) {
        let item = document.createElement("p");
        item.innerHTML = `Product selected: ${shopping.name} $ ${shopping.price}`;
        divBasket.appendChild(item);
    }
}

for (const buy of buttons) {
    buy.addEventListener("click" , buyHandler);
}

// START FILTER

let filterPrice = 2000;
let filtered = products.filter (obj => obj.price < filterPrice);
console.log (filtered);

if (parseInt (filterPrice) > 0) {
    let show = "";
    for (let index = 0; index < filtered.length; index++) {
        show += "Product code: " + filtered[index].code + "\n"+
        "Product: " + filtered[index].name + "\n"+
        "Price: $" + filtered[index].price + "\n" + "\n";    
    }
    
}
// else {
    
// }

// FINISH FILTER

// ORDERED ARRAYS

console.log('aca', products.sort((a,b) => {
    if(a.price>b.price){
        return 1//true
    }else{
        return -1 //false
    }
}))

// LIST OUT 

let out = "";

for (let index = 0; index < products.length; index++) {
    out += "You also have: " + "\n" + 
            "Product code: " + products[index].code + "\n"+
            "Product: " + products[index].name + "\n"+
            "Price: $" + products[index].price + "\n" + "\n";
}

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