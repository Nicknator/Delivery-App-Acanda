let basket = [];
let deliveryCosts = 5;
renderMenu();
renderBasket();

function renderMenu() {
    let menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = "";


    dataMenu.forEach(category => {
        // console.log(category.category);
        menuContent.innerHTML += ` <h2>${category.category}</h2>`


        category.dish.forEach(dish => {
            // console.log(dish.price);
            menuContent.innerHTML += getMenuTemplate(dish);
        }
        );
    });
}











function renderBasket() {
    let basketField = document.getElementById("basketField");
    basketField.innerHTML = `<h2>Dein Warenkorb</h2>`;


    let sum = 0;

    basket.forEach((item) => {
        let totalPrice = item.price * item.amount;
        sum += totalPrice;

        basketField.innerHTML += getBasketItemTemplate(item)
    });

    if (basket.length > 0) {
        // Erst hier, wenn wir wissen wie hoch 'sum' ist, rechnen wir die Endsumme aus
        let totalSum = sum + deliveryCosts;
        console.log(totalSum)

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
            // Das hier muss INS erste if, aber ins ELSE vom amount > 1
            let index = basket.indexOf(foundObject);
            basket.splice(index, 1);
        }
        renderBasket();

    }
}

