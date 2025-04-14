

import { loadPartial } from "./api/utils.js";


document.addEventListener("DOMContentLoaded", () => {
    const storedRecipe = localStorage.getItem("watchlist");

    if (storedRecipe) {
        const data = JSON.parse(storedRecipe);
        data.forEach(item => {
            createRecipe(item);
        })

    }
});

function createRecipe(data) {
    const card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML = `<span id="closeBtn" class="close">&times;</span><h2>${data.name}</h2>
    <img class="modal-img" src="${data.image}" alt="${data.name}">
            <div class="info-container">
                <div class="info"><p class="time">${data.minutes}</p><p>Minutes</p></div>
                <div class="info"><p class="ingredients">${data.ingredients}</p><p>Servings</p></div>
                <div class="info"><p class="serving">${data.servings}</p><p>Ingredients</p></div>
    
               
            </div>
        <div class="allergies">
            <p>Gluten Free: ${data.gluten}</p>
            <p>Vegan: ${data.vegan}</p>
            <p>Vegetarian: ${data.vegetarian}</p>
            <p>Healthy: ${data.healthy}</p>
        </div>
     <p>${data.instructions}</p>
     <p class="summary" >Gluten Free: ${data.summary}}</p>`;

    document.querySelector("#recipeContainer").appendChild(card);
}




loadPartial('#header-section', '/tastetrack/src/components/header.html')
loadPartial('#footer-section', '/tastetrack/src/components/footer.html')