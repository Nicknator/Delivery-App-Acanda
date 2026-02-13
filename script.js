let basket = [];
let deliveryCosts = 5;

renderMenu();
renderBasket();
mobileMenu();


function renderMenu() {
    const menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = "";

    dataMenu.forEach(category => {
        // Kategorie-Header
        menuContent.innerHTML += `
        <div class="streetFoodDish">
            <img src="${category.image}" class="iconSet">
            <h2>${category.category}</h2>
        </div>`;

        // Gerichte
        category.dish.forEach(dish => {
            menuContent.innerHTML += getMenuTemplate(dish);
        });
    });
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
    basketField.innerHTML = basketHeaderWrapperTemplate();

    // basketField.innerHTML += `<div class="basket-container" id="basketItemsContainer"></div>`;

    const basketItemsContainer = document.getElementById("basketItemsContainer");
    let sum = 0;

    basket.forEach(item => {
        const totalPrice = item.price * item.amount;
        sum += totalPrice;

        basketItemsContainer.innerHTML += getBasketItemTemplate(item);
    });

    if (basket.length > 0) {
        const totalSum = sum + deliveryCosts;
        basketField.innerHTML += getBasketTotalTemplate(sum, totalSum);
    }
}

function closeBasket() {
    document.getElementById("basketField").classList.remove("visible");
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
}




function orderButton() {
    const basketField = document.getElementById("basketField");
    const dialogHTML = getOrderButtonTemplate();
    document.body.insertAdjacentHTML("beforeend", dialogHTML);

    basket = [];
    basketField.classList.remove("visible");
    renderBasket();
    renderMenu();
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
    basketField.classList.add("visible");
    basketField.scrollIntoView({ behavior: "smooth" });
}