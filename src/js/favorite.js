
//For Header and Footer Partials
import { loadPartial } from "./api/utils.js";



//Event Listener attached to user moving to favorite page to load recipes
document.addEventListener("DOMContentLoaded", () => {
    const storedRecipe = localStorage.getItem("watchlist");

    if (storedRecipe) {
        const data = JSON.parse(storedRecipe);
        data.forEach(item => {
            createRecipe(item);
        })

    }
});

//Favorite Page CreateRecipe Function
function createRecipe(data) {
    const card = document.createElement('div');
    card.classList.add("card");

    let ingredientSteps = "";
    if (data.eachingredient && data.preparation && data.preparation.length > 0) {
        data.eachingredient.forEach((ingredient, index) => {
            ingredientSteps += `<li class="ingredient" >${ingredient}:  ${data.preparation[index]}`
        })
    }
    card.innerHTML = `<span id="closeBtn" class="close">&times;</span><h2>${data.name}</h2>
    <img class="modal-img" src="${data.image}" alt="${data.name}">
            <div class="info-container">
                <div class="info"><p class="time">${data.minutes}</p><p>Minutes</p></div>
                <div class="info"><p class="ingredients">${data.servings}</p><p>Servings</p></div>
                <div class="info"><p class="serving">${data.ingredients}</p><p>Ingredients</p></div>
    
               
            </div>
        <div class="allergies">
            <p>Gluten Free: ${data.gluten}</p>
            <p>Vegan: ${data.vegan}</p>
            <p>Vegetarian: ${data.vegetarian}</p>
            <p>Healthy: ${data.healthy}</p>
        </div>
         <ul id="ingredientContainer">
        ${ingredientSteps}
     </ul>
     <p>${data.instructions}</p>
     <p class="summary" >Gluten Free: ${data.summary}}</p>
    `;

    document.querySelector("#recipeContainer").appendChild(card);
}




//Loading header Function
loadPartial('#header-section', '/tastetrack/src/components/header.html').then(() => {
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            toggleMenu();
        });
    }
});

//Loading footer function
loadPartial('#footer-section', '/tastetrack/src/components/footer.html');

//Toggles the NavMenu Button in Mobile View 
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    const hamburgerX = document.querySelector("#hamburger-x");
    const hamburgerEqual = document.querySelector("#hamburger-equal");


    navMenu.classList.toggle("menu-active");


    hamburgerX.classList.toggle("hidden");
    hamburgerEqual.classList.toggle("hidden");
}
