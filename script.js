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
            menuContent.innerHTML += ` 

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
        });

    });
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


function renderBasket() {
    let basketField = document.getElementById("basketField");
    basketField.innerHTML = "<h2>Dein Warenkorb</h2>";
    

    let sum = 0;

    basket.forEach((item) => {
        let totalPrice = item.price * item.amount;
        sum += totalPrice;
        
        basketField.innerHTML += `
        <div class="basket-item">
            <button onclick="minusBasket('${item.name}')">-</button>
            <button onclick="addBasket('${item.name}', ${item.price})">+</button>
            <span>${item.amount}x ${item.name}</span>
            <span>${totalPrice.toFixed(2)} €</span>
        </div>`;
    });

    if (basket.length > 0) {
        // Erst hier, wenn wir wissen wie hoch 'sum' ist, rechnen wir die Endsumme aus
        let totalSum = sum + deliveryCosts;

        basketField.innerHTML += `
        
           
            <span><strong>Zwischensumme: ${sum.toFixed(2)} €</strong></span>
            <span><strong>Lieferkosten: ${deliveryCosts.toFixed(2)} €</strong></span><br>
            <hr>
            <p><strong>Gesamtbetrag: ${totalSum.toFixed(2)} €</strong></p>
            <div>
            <button> Jetzt bestellen (${totalSum.toFixed(2)}€)</button>
            </div>



        `;
    }
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

