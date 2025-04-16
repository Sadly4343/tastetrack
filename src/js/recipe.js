//Imports
import { fetchRecipes } from "./api/recipeApi.js";
import { fetchRecipeInformation } from "./api/recipeApi.js";
import { checkPagination, displayPage, createPagination } from "./pagination.js";

//Creates recipe cards dynamically
async function createDisplayRecipes(recipe) {

    const totalIngredients = recipe.missedIngredientCount + 1;

    const cardFlip = document.createElement('div');
    cardFlip.classList.add('card-flip');

    const cardFlipInner = document.createElement('div');
    cardFlipInner.classList.add('card-flip-inner');
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}" width="600" height="400"> </div>`;


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

        if (localStorage.getItem(`liked-${itemId}`)) {
            alert("you liked this already!");
            let currentLikes = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentLikes + 1;

        } else {
            let currentLikes = parseInt(likeCount.textContent, 10);
            likeCount.textContent = currentLikes + 1;

            localStorage.setItem(`liked-${itemId}`, true);
            alert("you like this!");

        } event.target.disabled = true;
    });




    //Adds eventlistener to learn more button.
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


//Creates Modal Recipe Card
async function createRecipe(recipe) {

    //Modal Creation
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalInner = document.createElement('div');
    modalInner.classList.add('modal-inner');

    //Modal Template Literal Card Information
    modalInner.innerHTML = `<span id="closeBtn" class="close">&times;</span><h2>${recipe.title}</h2>
    <img class="modal-img" src="${recipe.image}" alt="${recipe.title}" width="600" height="400">
            <div class="info-container">
                <div class="info"><p class="time">${recipe.readyInMinutes}</p><p>Minutes</p></div>
                <div class="info"><p class="ingredients">${recipe.servings}</p><p>Servings</p></div>
                <div class="info"><p class="serving">${recipe.extendedIngredients.length}</p><p>Ingredients</p></div>
    
               
            </div>
        <div class="allergies">
            <p>Gluten Free: ${recipe.glutenFree}</p>
            <p>Vegan: ${recipe.vegan}</p>
            <p>Vegetarian: ${recipe.vegetarian}</p>
            <p>Healthy: ${recipe.veryHealthy}</p>
        </div>
     <p>${recipe.instructions}</p>
     <p>Gluten Free: ${recipe.summary}</p>
                     <button type="button" id="saveWatchlist" class="saveWatchlist"">Add to WatchList</button>`


    modal.appendChild(modalInner);
    document.querySelector('#modal').appendChild(modal);

    //Adds closebtn eventlistener
    const closeBtn = modalInner.querySelector('#closeBtn');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    //Adds windows eventlistener
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    //Query selector to saveBtn
    const saveBtn = modalInner.querySelector('#saveWatchlist');

    //Adds eventlistener to save and pushes values to localstorage
    saveBtn.addEventListener('click', () => {
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

        watchlist.push({
            name: recipe.title,
            image: recipe.image,
            minutes: recipe.readyInMinutes,
            servings: recipe.servings,
            ingredients: recipe.extendedIngredients.length,
            eachingredient: recipe.extendedIngredients.map(ingredient => ingredient.nameClean),
            gluten: recipe.glutenFree,
            vegan: recipe.vegan,
            preparation: recipe.extendedIngredients.map(ingredient => ingredient.original),
            vegetarian: recipe.vegetarian,
            healthy: recipe.veryHealthy,
            instruction: recipe.instructions,
            summary: recipe.summary


        });
        localStorage.setItem('watchlist', JSON.stringify(watchlist));

    })


    modal.style.display = 'block';


}



//Displays and shows recipe information
async function displayRecipeInformation(query) {
    const recipes = await fetchRecipeInformation(query);
    createRecipe(recipes);
}

//Displays recipe to create display recipes.
export async function displayRecipes(query) {

    const recipes = await fetchRecipes(query);
    const container = document.getElementById('recipe-section')
    container.innerHTML = '';
    recipes.forEach(recipe => {
        createDisplayRecipes(recipe);
    });
    createPagination();
    displayPage(1);
    checkPagination();


}




