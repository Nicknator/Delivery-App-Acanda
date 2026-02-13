function getMenuTemplate(dish) {
    return `
    <div class="menuTemplate">
        <div class="menuImage">
            <img src="img/${dish.image}" alt="${dish.name}">
        </div>

        <div class="contentPosition">
            <div class="dishRow">
                <div class="frame354">
                    <p class="dishName">${dish.name}</p>
                    <p class="description">${dish.description}</p>
                </div>

                <div class="frame355">
                    <p class="price desktopPrice">${formatPrice(dish.price)} €</p>
                    <div class="dish-controls" data-name="${dish.name}">
                        ${renderDishControls(dish)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

function basketHeaderWrapperTemplate() {
    return `<div class="basketHeaderWrapper">
    <h2 class="headlineBasket h2">Dein Warenkorb</h2>
    <p class="closeBTN" onclick="closeBasket()">✕</p>
</div>
<div class="basket-container" id="basketItemsContainer"></div>`;
}



function getBasketItemTemplate(item) {
    let totalPrice = item.price * item.amount;
    return `
        <div class="basket-item typography">
            <div class="dishBasketField">
                <span class="headline2">${item.amount}x ${item.name}</span>
            </div>

            <div class="priceButtonField">
                <div class="addTrashButtonField">
                    <button onclick="minusBasket('${item.name}')" class="addMinusButton">-</button>
                    <p>${1}</p>
                    <button onclick="addBasket('${item.name}', ${item.price})" class="addMinusButton">+</button>
                </div>
                <span class="headline2">${formatPrice(totalPrice)} €</span>
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
                    <strong class="nervig">${formatPrice(deliveryCosts)} €</strong>
                </span>
                <hr class="separator">
                <span class="summen-container"><strong>Gesamtbetrag</strong>
                    <strong class="nervig">${formatPrice(totalSum)} €</strong>
                </span>
            </div>

            <div class="buttonFieldSet">
                <button class="buttonSet" onclick="orderButton()">
                    Jetzt bestellen (${formatPrice(totalSum)} €)
                </button>
            </div>
        </div>`;
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
            <button class="menu-btn"><i class="fas fa-home" onclick="goTo('jumpToHeader')"></i></button>
            <button class="menu-btn"><i class="fas fa-user"></i></button>
            <button class="menu-btn"><i class="fas fa-receipt" onclick="goTo('menuContent')"></i></button>
            <button class="menu-btn">
                <i class="fas fa-basket-shopping" onclick="openBasket()"></i>
            </button>
        </nav>`;
}




