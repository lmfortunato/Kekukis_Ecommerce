let divBasket = document.getElementById("basket");
let basket;

if ("basket" in localStorage && JSON.parse(localStorage.getItem('basket')).length > 0){
    basket = JSON.parse(localStorage.getItem("basket"));
    for (const shopping of basket){
        let item = document.createElement("p");
        item.innerHTML = `Product selected: ${shopping.name} $ ${shopping.price}
        <img src='../img/trash.svg' id=${shopping.code}  class='btn-delete'/>`;
        divBasket.appendChild(item);
    }
}else{
    let text = document.createElement('h2');
    text.innerHTML ='Your basket is empty'
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

    localStorage.setItem('basket', JSON.stringify(basket));
    divBasket.innerHTML = '';
    for (const shopping of basket) {
        let item = document.createElement("p");
        item.innerHTML = `Product selected: ${shopping.name} $ ${shopping.price}
        <img src='../img/trash.svg' id=${shopping.code} class='btn-delete'/>`;
        divBasket.appendChild(item);
    }
    
    const buttons = document.getElementsByClassName("btn-delete");

    for (const deleteItem of buttons){
        deleteItem.addEventListener("click" , deleteItems);
    }

    if(JSON.parse(localStorage.getItem('basket')).length <= 0){
        let text = document.createElement('h2');
        text.innerHTML ='Your basket is empty'
        divBasket.appendChild(text)
    } 
}

const buttons = document.getElementsByClassName("btn-delete");

for (const deleteItem of buttons) {
    deleteItem.addEventListener("click" , deleteItems);
}