let divBasket = document.getElementById("basket");
let basket;


if ("basket" in localStorage && JSON.parse(localStorage.getItem('basket')).length > 0){
    basket = JSON.parse(localStorage.getItem("basket"));
    for (const shopping of basket){
        let item = document.createElement("p");
        item.innerHTML = `Product selected: ${shopping.name} $ ${shopping.price}
                        <button id="${shopping.code}" class="btn btn-info btn-add">+</button>
                        <button id="${shopping.code}" class="btn btn-warning btn-sub">-</button>
                        <img src='../img/trash.svg' id=${shopping.code}  class='btn-delete'/>`;
        divBasket.appendChild(item);
    }
}else{
    let text = document.createElement('div');
    text.innerHTML = `<h2>Your basket is empty</h2>
                    <a  href="../index.html"><button class="backHome">Back Home</button></a>`
    divBasket.appendChild(text)
}

const deleteItems = (e) =>{
    // Just delete one item
    for (let i=0; i<basket.length; i++) {
        if(parseInt(basket[i].code) == parseInt (e.target.id)){
            basket.splice(i,1);
            break;
        }
    }
    
    $('.btn-add').on("click", addQuantity);
    $('.btn-sub').click(subQuantity);
    // ADDING AND SUBTRACTING QUANTITY
    //MANEJADOR PARA AGREGAR CANTIDAD CANTIDAD
function addQuantity(){
    let product = basket.find(p => p.code == this.id);
    product.adding(1);
    $(this).parent().children()[1].innerHTML = product.quantity;
    $(this).parent().children()[2].innerHTML = product.subtotal();
    //GUARDAR EN STORAGE
    localStorage.setItem("basket",JSON.stringify(basket));
}
  //MANEJADOR PARA RESTAR CANTIDAD
function subQuantity(){
    let product = basket.find(p => p.code == this.id);
    if(product.quantity > 1){
    product.adding(-1);
    let registerUI = $(this).parent().children();
    registerUI[1].innerHTML = product.quantity;
    registerUI[2].innerHTML = product.subtotal();
      //GUARDAR EN STORAGE
    localStorage.setItem("basket",JSON.stringify(basket));
    }
}

    localStorage.setItem('basket', JSON.stringify(basket));
    divBasket.innerHTML = '';
    for (const shopping of basket) {
        let item = document.createElement("p");
        item.innerHTML = `Product selected: ${shopping.name} $ ${shopping.price}
                        <button class="btn btn-info btn-add">+</button>
                        <button class="btn btn-warning btn-sub">-</button>
                        <img src='../img/trash.svg' id=${shopping.code}  class='btn-delete'/>`;
        divBasket.appendChild(item);
    }
    
    const buttons = document.getElementsByClassName("btn-delete");

    for (const deleteItem of buttons){
        deleteItem.addEventListener("click" , deleteItems);
    }

    if(JSON.parse(localStorage.getItem('basket')).length <= 0){
        let text = document.createElement('div');
        text.innerHTML = `<h2>Your basket is empty</h2>
                        <a href="../index.html"><button class="backHome">Back Home</button></a>`
        divBasket.appendChild(text)
    } 
}

const buttons = document.getElementsByClassName("btn-delete");

for (const deleteItem of buttons) {
    deleteItem.addEventListener("click" , deleteItems);
}