import { fetchCalories } from "./api/calorieApi";

document.addEventListener('DOMContentLoaded', async () => {
    const recipes = await fetchCalories('egg');
    console.log(recipes);
})

