import { fetchRecipes } from "./api/recipeApi.js";

async function createDisplayRecipes(recipe) {

    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>`;

    document.querySelector('#recipe-section').appendChild(card);


}

async function displayRecipes(query) {
    const recipes = await fetchRecipes(query);
    recipes.forEach(recipe => {
        createDisplayRecipes(recipe);
    });
}




displayRecipes('egg');

