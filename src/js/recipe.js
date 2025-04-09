import { fetchRecipes } from "./api/recipeApi.js";
import { fetchRecipeInformation } from "./api/recipeApi.js";


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

async function createRecipe(recipe) {


    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalInner = document.createElement('div');
    modalInner.classList.add('modal-inner');

    modalInner.innerHTML = `<span id="closeBtn" class="close">&times;</span><h2>${recipe.title}</h2>
    <img class="modal-img" src="${recipe.image}" alt="${recipe.title}" loading=lazy>
            <div class="info-container">
                <div class="info"><p class="time">${recipe.readyInMinutes}</p><p>Minutes</p></div>
                <div class="info"><p class="ingredients">${recipe.servings}</p><p>Servings</p></div>
                <div class="info"><p class="serving">${recipe.extendedIngredients.length}</p><p>Ingredients</p></div>
            </div>
    <p>${recipe.instructions}</p>`


    modal.appendChild(modalInner);
    document.querySelector('#modal').appendChild(modal);

    const closeBtn = modalInner.querySelector('#closeBtn');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


    modal.style.display = 'block';


}




async function displayRecipeInformation(query) {
    const recipes = await fetchRecipeInformation(query);
    createRecipe(recipes);
}

export async function displayRecipes(query) {

    const recipes = await fetchRecipes(query);
    recipes.forEach(recipe => {
        createDisplayRecipes(recipe);
    });
}


