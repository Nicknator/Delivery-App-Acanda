let basket = [];
let deliveryCosts = 5;
renderMenu();
renderBasket();
mobileMenu();

function renderMenu() {
    let menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = "";
    dataMenu.forEach(category => {
        menuContent.innerHTML += `
        <div class="streetFoodDish">
        <img src="${category.image}" class="iconSet">
        <h2>${category.category}</h2>
        </div>
        `
        category.dish.forEach(dish => {
            menuContent.innerHTML += getMenuTemplate(dish);
        }
        );
    });
}





function renderBasket() {
    let basketField = document.getElementById("basketField");
    basketField.innerHTML = `<h2 class="headlineBasket">Dein Warenkorb</h2>`;
    basketField.innerHTML += `<div class="basket-container" id="basketItemsContainer"></div>`;
    let basketItemsContainer = document.getElementById("basketItemsContainer");

    let sum = 0;

    basket.forEach((item) => {
        let totalPrice = item.price * item.amount;
        sum += totalPrice;

        basketItemsContainer.innerHTML += getBasketItemTemplate(item);
    });

    if (basket.length > 0) {
        let totalSum = sum + deliveryCosts;
        basketField.innerHTML += getBasketTotalTemplate(sum, totalSum);
    }
}






function orderButton() {
    const basketField = document.getElementById('basketField');
    const dialogHTML = getOrderButtonTemplate();
    document.body.insertAdjacentHTML('beforeend', dialogHTML);
    basket = [];
    basketField.style.display = 'none';
    renderMenu();
}









function addBasket(name, price) {

    const basketField = document.getElementById('basketField');
    basketField.classList.add('visible'); // ← HIER rein!

    let foundObject = basket.find(item => item.name === name);

    if (foundObject) {
        foundObject.amount++;
    } else {
        basket.push({ name, price, amount: 1 });
    }

    renderBasket();
    renderMenu();
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
    renderMenu(); // ← WICHTIG!
}





function getAmount(name) {
    let item = basket.find(d => d.name === name);
    return item ? item.amount : 0;
}


function renderDishControls(dish) {

    let amount = getAmount(dish.name);

    if (amount === 0) {
        return `
            <button onclick="addBasket('${dish.name}', ${dish.price})"
                class="button">
                Hinzufügen
            </button>
        `;
    }

    return `
        <div class="counter">
            <button onclick="minusBasket('${dish.name}')">-</button>
            <span>${amount}</span>
            <button onclick="addBasket('${dish.name}', ${dish.price})">+</button>
        </div>
    `;
}











function goTo(tarketID) {
    document.getElementById(tarketID).scrollIntoView({ behavior: 'smooth' });
}




function mobileMenu() {
    let mobileField = document.getElementById("mobileField");
    mobileField.innerHTML = getMobileMenuTemplate();
}





