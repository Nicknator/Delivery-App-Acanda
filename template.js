
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
        <div class="basket-item">
            <div class="dishBasketField">
                <span>${item.amount}x ${item.name}</span>
        </div>

        <div class="priceButtonField">
            <div class="addTrashButtonField">
                <button onclick="minusBasket('${item.name}')"><span>&#128465;</span></button>
                <p>1</p>
                <button onclick="addBasket('${item.name}', ${item.price})">+</button>
            </div>

                <span>${totalPrice.toFixed(2)} €</span>
        </div>


        </div>`;

}






function getBasketTotalTemplate(sum, totalSum) {
    return `
            <span><strong>Zwischensumme: ${sum.toFixed(2)} €</strong></span>
            <span><strong>Lieferkosten: ${deliveryCosts.toFixed(2)} €</strong></span><br>
            <hr>
            <p><strong>Gesamtbetrag: ${totalSum.toFixed(2)} €</strong></p>
            <div>
            <button onclick="orderButton('')"> Jetzt bestellen (${totalSum.toFixed(2)} €)</button>
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