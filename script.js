let basket = [];
let deliveryCosts = 5;

renderMenu();
renderBasket();
mobileMenu();


function renderMenu() {
    const menuContent = document.getElementById("menuContent");
    let html = "";

    dataMenu.forEach(category => {
        html += `
        
        <div class="streetFoodDish">
            <img src="${category.image}" class="iconSet">
            <h2>${category.category}</h2>
        </div>`;

        category.dish.forEach(dish => {
            html += getMenuTemplate(dish);
        });
    });

    menuContent.innerHTML = html;
}




function renderDishControls(dish) {
    const amount = getAmount(dish.name);

    if (amount === 0) {
        return `
            <button onclick="addBasket('${dish.name}', ${dish.price})" class="button">
                Hinzufügen
            </button>
        `;
    }
    else {
        return `
        <div class="counter">
            <button onclick="minusBasket('${dish.name}')">-</button>
            <span>${amount}</span>
            <button onclick="addBasket('${dish.name}', ${dish.price})">+</button>
        </div>
    `;
    }
}


function getAmount(name) {
    const item = basket.find(d => d.name === name);
    return item ? item.amount : 0;
}

function updateDishControls(name) {
    const controls = document.querySelector(`.dish-controls[data-name="${name}"]`);
    if (!controls) return;

    // Dish-Objekt aus Daten holen
    let dish;
    dataMenu.forEach(cat => {
        const found = cat.dish.find(d => d.name === name);
        if (found) dish = found;
    });

    if (!dish) return;

    controls.innerHTML = renderDishControls(dish);
}

function renderBasket() {
    const basketField = document.getElementById("basketField");
    basketField.innerHTML = basketHeaderWrapperTemplate(); // Header immer

    const basketItemsContainer = document.getElementById("basketItemsContainer");
    let html = "";
    let sum = 0;

    basket.forEach(item => {
        const totalPrice = item.price * item.amount;
        sum += totalPrice;
        html += getBasketItemTemplate(item);
    });

    basketItemsContainer.innerHTML = html;

    if (basket.length > 0) {
        const totalSum = sum + deliveryCosts;
        basketField.innerHTML += getBasketTotalTemplate(sum, totalSum);
    }

    // Scroll nach unten, damit das zuletzt hinzugefügte Gericht sichtbar ist
    if (basketItemsContainer) {
        basketItemsContainer.scrollTop = basketItemsContainer.scrollHeight;
    }
}







function addBasket(name, price) {
    const basketField = document.getElementById("basketField");
    basketField.classList.add("visible");

    let foundObject = basket.find(item => item.name === name);
    if (foundObject) {
        foundObject.amount++;
    } else {
        basket.push({ name, price, amount: 1 });
    }

    renderBasket();
    updateDishControls(name);


    const basketItemsContainer = document.getElementById("basketItemsContainer");
    if (basketItemsContainer) {
        basketItemsContainer.scrollTop = basketItemsContainer.scrollHeight;
    }
    updateBasketBadge();

}


function minusBasket(name) {
    let foundObject = basket.find(item => item.name === name);
    if (!foundObject) return;

    if (foundObject.amount > 1) {
        foundObject.amount--;
    } else {
        basket = basket.filter(item => item.name !== name);
    }

    renderBasket();
    updateDishControls(name);
    updateBasketBadge();

}



function deleteBasketItem(name) {
    basket = basket.filter(item => item.name !== name);
    renderBasket();
    updateDishControls(name);
    updateBasketBadge();

}





function orderButton() {
    const basketField = document.getElementById("basketField");
    const dialogHTML = getOrderButtonTemplate();
    document.body.insertAdjacentHTML("beforeend", dialogHTML);

    basket = [];
    basketField.classList.remove("visible");
    renderBasket();
    renderMenu();
    updateBasketBadge();

}


function goTo(targetID) {
    document.getElementById(targetID).scrollIntoView({ behavior: "smooth" });
}



function mobileMenu() {
    const mobileField = document.getElementById("mobileField");
    mobileField.innerHTML = getMobileMenuTemplate();
}


function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + '';
}


function openBasket() {
    const basketField = document.getElementById("basketField");
    const desktopBtn = document.getElementById("desktopBasketBtn");

    // Basket sichtbar machen
    basketField.classList.add("visible");

    // Desktop-Button ausblenden
    if (desktopBtn) desktopBtn.style.display = "none";

    // Basket-Inhalt scrollen
    const basketItemsContainer = document.getElementById("basketItemsContainer");
    if (basketItemsContainer) basketItemsContainer.scrollTop = basketItemsContainer.scrollHeight;

    // Badge aktualisieren
    updateBasketBadge();
}

function closeBasket() {
    const basketField = document.getElementById("basketField");
    const desktopBtn = document.getElementById("desktopBasketBtn");

    // Basket ausblenden
    basketField.classList.remove("visible");

    // Desktop-Button wieder einblenden
    if (desktopBtn) desktopBtn.style.display = "flex";
}






function updateBasketBadge() {
    const badge = document.getElementById("basketBadge");
    const totalItems = basket.reduce((sum, item) => sum + item.amount, 0);

    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems === 0 ? "none" : "flex";
    }
}

















