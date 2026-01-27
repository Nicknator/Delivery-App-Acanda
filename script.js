

function renderMenu() {
    let menuContent = document.getElementById("menuContent");
    menuContent.innerHTML = "";

    dataMenu.forEach(category => {
        console.log(category.category);
        menuContent.innerHTML += ` <h2>${category.category}</h2>`


        category.dish.forEach(dish => {
            console.log(dish.name)
            menuContent.innerHTML += ` 

        <div class="menuTemplate">
            <div>
                <img src="img/${dish.image}" alt="${dish.name}" width="150">
            </div>

            <div class="contentPosition">
                <div class="titleRow">
                    <p class="name">${dish.name}</p>
                    <p class="price">${dish.price} €</p>
                </div>
                <p class="description">${dish.description}</p>
            </div>
        </div>

            
            
            
            
            
            
            `


        });





    });
}


renderMenu();