let basket = [];
let deliveryCosts = 5;
renderMenu();
renderBasket();

function renderMenu() {
    let menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = "";


    dataMenu.forEach(category => {
        // console.log(category.category);
        menuContent.innerHTML += `
        
        <div class="streetFoodDish">
        <img src="${category.image}" class="iconSet">
        <h2>${category.category}</h2>
         
        </div>
        
        `


        category.dish.forEach(dish => {
            // console.log(dish.price);
            menuContent.innerHTML += getMenuTemplate(dish);
        }
        );
    });
}





function renderBasket() {
    let basketField = document.getElementById("basketField");
    basketField.innerHTML = `<h2 class="headlineBasket">Dein Warenkorb</h2>`;

    // Scrollbarer Bereich für Items
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

        // Gesamtbereich bleibt **außerhalb** des Scroll-Containers
        basketField.innerHTML += getBasketTotalTemplate(sum, totalSum);
    }
}






function orderButton() {
    basket = [];
    let basketField = document.getElementById("basketField");
    basketField.innerHTML = getOrderButtonTemplate();
}







function addBasket(name, price) {
    let foundObject = basket.find(item => item.name === name);
    if (foundObject) {
        foundObject.amount++;

    } else {
        basket.push({
            name: name,
            price: price,
            amount: 1
        })

    }
    renderBasket();
}





function minusBasket(name) {
    let foundObject = basket.find(item => item.name === name);

    if (foundObject) {

        if (foundObject.amount > 1) {
            foundObject.amount--;
        }

        else {

            let index = basket.indexOf(foundObject);
            basket.splice(index, 1);
        }
        renderBasket();

    }
}


function mobileMenu() {
    let mobileField = document.getElementById("mobileField");
    mobileField.innerHTML = `
       <nav class="mobile-menu">
            <button class="menu-btn"><i class="fas fa-home"></i></button>
            <button class="menu-btn"><i class="fas fa-user"></i></button>
            <button class="menu-btn"><i class="fas fa-shopping-cart"></i></button>
            <button class="menu-btn"><i class="fas fa-basket-shopping"></i></button>
      </nav>

    `;
}



mobileMenu();

