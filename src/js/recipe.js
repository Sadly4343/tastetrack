import { fetchRecipes } from "./api/recipeApi.js";
import { loadPartial } from "./api/utils.js";

async function createDisplayRecipes(recipe) {

    const totalIngredients = recipe.missedIngredientCount + 1;
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}" loading=lazy>
            <h2>${recipe.title}</h2> <button >Click Here</button> 
            <p>Number of Ingredients: ${totalIngredients}
            <div class="likes">
            <button class="like-button" data-item-id="${recipe.id}"> ❤️ Like </button>
            <span class="like-count" >${recipe.likes}</span>
            </div>`;

    const likeButton = card.querySelector(".like-button");
    const likeCount = card.querySelector(".like-count");

    likeButton.addEventListener('click', (event) => {
        const itemId = event.target.getAttribute('data-item-id');

        if (localStorage.getItem(`liked-${itemId}`)) {
            alert("You've liked this!");
            let currentLikes = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentLikes + 1;

        } else {
            let currentLikes = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentLikes + 1;

            localStorage.setItem(`liked-${itemId}`, true);
            alert("you liked this already");

        } event.target.disabled = true;
    });

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

