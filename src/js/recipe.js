import { fetchRecipes } from "./api/recipeApi";

document.addEventListener('DOMContentLoaded', async () => {
    const recipes = await fetchRecipes('egg');
    console.log(recipes);
})

