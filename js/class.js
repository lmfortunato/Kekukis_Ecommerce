class Product {
    constructor(code, name, price, img, category, quantity) {
        this.code = parseInt(code);
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.img = img;
        this.category = category;
        this.quantity = quantity || 1;
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