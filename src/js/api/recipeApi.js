//Fetches Recipes based on Food Value
export async function fetchRecipes(query) {

    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${query}&number=2&ignorePantry=true&ranking=1`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5cc3bd66acmsh84b895e12428c9fp1ffb72jsn41edcff63d37',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
};

//Fetches Recipe Information based on Food ID
export async function fetchRecipeInformation(query) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${query}/information`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5cc3bd66acmsh84b895e12428c9fp1ffb72jsn41edcff63d37',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
        return [];
    }
};
