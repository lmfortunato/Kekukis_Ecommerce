// OBJECTS
// LOG IN
// let user = prompt ("Insert your User Account");
// let password = prompt ("Insert your password" + "\n" + "Minimum 8 characters");

// let logIn = "Your User is: " + user + "\n" +
//             "Your password is: " + password;

// console.log (logIn);

// if (password.length >= 8) {
//     alert (logIn);
// }
// else {
//     alert ("Error. Password must have 8 characters");
// }

// START OBJECTS

class Product {
    constructor(code, name, price) {
        this.code = parseInt(code);
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
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
products.push (new Product (0001, "carrot cake", 590));
products.push (new Product (0002, "drip cake", 650));
products.push (new Product (0003, "macarons", 300));
products.push (new Product (0004, "cookies", 150));
products.push (new Product (0005, "breakfast", 1500));

console.log (products);

// INTERACTING WITH THE INTERFACE

for (const product of products) {
    // CREATING THE TAG
    let divProduct = document.createElement("div");
    divProduct.classList.add ("card");
    // MODIFYING THE CONTENT
    divProduct.innerHTML = `<h2> Name: ${product.name}</h2>
                            <br>
                            <h4> Price: $ ${product.price}</h4>
                            <button>Buy</button>
                            <hr>`;
    // ADDING TO INTERFACE
    document.body.appendChild (divProduct);
}

// START FILTER

let filterPrice = prompt ("Insert maximum price");
let filtered = products.filter (obj => obj.price < filterPrice);
console.log (filtered);

if (parseInt (filterPrice) > 0) {
    let show = "";
    for (let index = 0; index < filtered.length; index++) {
        show += "Product code: " + filtered[index].code + "\n"+
        "Product: " + filtered[index].name + "\n"+
        "Price: $" + filtered[index].price + "\n" + "\n";    
    }
    show ? alert (show) : alert ("Product not found");
}
else {
    alert ("The values are wrong");
}

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

alert (out);

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