
function getMenuTemplate(dish) {
    return ` 
        <div class="menuTemplate">
            <div>
                <img src="img/${dish.image}" alt="${dish.name}">
            </div>

            <div class="contentPosition">
                <div class="titleRow">
                    <p class="name">${dish.name}</p>
                    <p class="price desktopPrice">${dish.price} €</p>
                </div>
                <p class="description">${dish.description}</p>

                ${renderDishControls(dish)}

                <!-- Preis nur für Mobile -->
                <p class="price responsivPrice">${dish.price} €</p>
                

            </div>
        </div>
    `;
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
            <button class="buttonSet" onclick="orderButton('')" > 
            <h2 class="buttonFrontSet">Jetzt bestellen (${totalSum.toFixed(2)} €)</h2></button>
            </div>
         </div>
        `;
}





function getOrderButtonTemplate() {
    return `         
        
        
            <dialog open id="orderDialog">
                <div class="order-dialog-content">
                    <h2>Dein Warenkorb</h2>
                    <h2>🎉🎆🚚</h2>
                    <h2>Glückwunsch, Bestellung bestätigt!</h2>
                    <p>Dein Essen ist auf dem Weg!</p>
                <form method="dialog">
                    <button onclick="document.getElementById('basketField').classList.remove('visible'); this.closest('dialog').close();">
                        OK
                    </button>
                </form>
            </div>
        </dialog>`;

}




function getMobileMenuTemplate() {
    return `
       <nav class="mobile-menu">
            <button class="menu-btn"><i class="fas fa-home" onclick="goTo('jumpToHeader')" ></i></button>
            <button class="menu-btn"><i class="fas fa-user"></i></button>
            <button class="menu-btn"><i class="fas fa-receipt" onclick="goTo('menuContent')" ></i></button>
            <button class="menu-btn"><i class="fas fa-basket-shopping" onclick="goTo('basketField')" ></i></button>
      </nav>

    `;
}



