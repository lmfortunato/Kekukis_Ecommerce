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
                            <button id="${product.code}" class="btnBuy">Add to cart</button>`;
                            divContainer.appendChild(divCard)
    }
    let buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    $(".btnBuy").click (function (){
        swal("Product Added to cart!", "" , "success");
    }) 
    
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
                            <button id="${product.code}" class="btnBuy">Add to cart</button>`;
                            divContainer.appendChild(divCard)
    }

    const buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    $(".btnBuy").click (function (){
        swal("Product Added to cart!", "" , "success");
    }) 
}