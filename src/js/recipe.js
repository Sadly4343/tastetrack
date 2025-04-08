import { fetchRecipes } from "./api/recipeApi.js";
import { loadPartial } from "./api/utils.js";

async function createDisplayRecipes(recipe) {

    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}" loading=lazy>
            <h2>${recipe.title}</h2> <button >Click Here</button>`;

    document.querySelector('#recipe-section').appendChild(card);


}

async function displayRecipes(query) {
    const recipes = await fetchRecipes(query);
    recipes.forEach(recipe => {
        createDisplayRecipes(recipe);
    });
}

loadPartial('#header-section', '/src/components/header.html')
loadPartial('#footer-section', '/src/components/footer.html')



displayRecipes('egg');

