
function getMenuTemplate(dish) {
    return ` 
        <div class="menuTemplate">
            <div>
                <img src="img/${dish.image}" alt="${dish.name}">
            </div>

            <div class="contentPosition">
                <div class="titleRow">
                    <p class="name">${dish.name}</p>
                    <p class="price">${dish.price} €</p>
                </div>
                <p class="description">${dish.description}</p>
                <button onclick="addBasket('${dish.name}', ${dish.price})">+</button>

            </div>
        </div>
            `

}




function getBasketItemTemplate(item) {
    let totalPrice = item.price * item.amount;
    return `
        <div class="basket-item typography">
            
                <div class="dishBasketField">
                    <span>${item.amount}x ${item.name}</span>
                </div>

                <div class="priceButtonField">
                    <div class="addTrashButtonField">
                        <button onclick="minusBasket('${item.name}')"><span>&#128465;</span></button>
                        <p>1</p>
                        <button onclick="addBasket('${item.name}', ${item.price}) ">+</button>
                    </div>

                    <span>${totalPrice.toFixed(2)} €</span>
                </div>


                

        </div>`;

}






function getBasketTotalTemplate(sum, totalSum) {
    return `

         <div class="basket-item-down">
            <div class="priceField">

            <span class="summen-container"><strong>Zwischensumme</strong>
            <strong class="nervig">${sum.toFixed(2)} €</strong>
            </span>


            <span class="summen-container"><strong>Lieferkosten</strong> 
            <strong class="nervig">${deliveryCosts.toFixed(2)} €</strong>
            </span> 
            <hr class="separator">
            <span class="summen-container"><strong>Gesamtbetrag</strong> 
            <strong class="nervig">${totalSum.toFixed(2)} €</strong>
            </span> 
            </div>


            <div class="buttonFieldSet" >
            <button class="buttonSet" onclick="orderButton('')"> <h2>Jetzt bestellen (${totalSum.toFixed(2)} €)</h2></button>
            </div>
         </div>
        `;
}





function getOrderButtonTemplate() {
    return `<h2>Dein Warenkorb</h2>
    <dialog open>
            <h2>🎉🎆🚚 </h2>
            <h2>Glückwunsch Bestellung bestätigt!</h2>
            <p> Dein Essen ist auf dem Weg!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
    </dialog>   
    `
}