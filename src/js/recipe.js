import { fetchRecipes } from "./api/recipeApi.js";
import { fetchRecipeInformation } from "./api/recipeApi.js";
import { loadPartial } from "./api/utils.js";

async function createDisplayRecipes(recipe) {

    const totalIngredients = recipe.missedIngredientCount + 1;

    const cardFlip = document.createElement('div');
    cardFlip.classList.add('card-flip');

    const cardFlipInner = document.createElement('div');
    cardFlipInner.classList.add('card-flip-inner');
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}" loading=lazy> </div>`;


    const cardFlipBack = document.createElement('div');
    cardFlipBack.classList.add('card-flip-back');
    cardFlipBack.innerHTML = `<h2>${recipe.title}</h2>
            <p>Number of Ingredients: ${totalIngredients}
            <div class="likes">
            <button class="like-button" data-item-id="${recipe.id}"> ❤️ Like </button>
            <span class="like-count" >${recipe.likes}</span>
            <button type="button" class="recipeButton" data-id="${recipe.id}">Learn More</button>
            </div>`


    const likeButton = cardFlipBack.querySelector(".like-button");
    const likeCount = cardFlipBack.querySelector(".like-count");
    const recipeButton = cardFlipBack.querySelector(".recipeButton");
    likeButton.addEventListener('click', (event) => {
        const itemId = event.target.getAttribute('data-item-id');

        if (localStorage.getItem(`liked - ${itemId} `)) {
            alert("You've liked this!");
            let currentLikes = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentLikes + 1;

        } else {
            let currentLikes = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentLikes + 1;

            localStorage.setItem(`liked - ${itemId} `, true);
            alert("you liked this already");

        } event.target.disabled = true;
    });



    recipeButton.addEventListener('click', (event) => {
        const query = event.target.getAttribute('data-id');
        try {
            displayRecipeInformation(query);
        }
        catch (error) {
            console.error(error);
        }
    })

    cardFlipInner.appendChild(card);
    cardFlipInner.appendChild(cardFlipBack);

    cardFlip.appendChild(cardFlipInner);

    document.querySelector('#recipe-section').appendChild(cardFlip);


}

document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search').value;
    if (!query) {
        alert('Enter Ingredients');
        return;
    }
    const container = document.getElementById('recipe-section');
    container.innerHTML = '';

    displayRecipes(query);
})

async function displayRecipeInformation(query) {
    const recipes = await fetchRecipeInformation(query);
    createDisplayRecipes(recipes);
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

