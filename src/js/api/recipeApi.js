export async function fetchRecipes(query) {

    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${query}&number=5&ignorePantry=true&ranking=1`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8f7d15956bmsh82f729e7fd5f293p1b21f5jsnfd79336ba52c',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
};
export async function fetchRecipeInformation(query) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${query}/information`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8f7d15956bmsh82f729e7fd5f293p1b21f5jsnfd79336ba52c',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;

    } catch (error) {
        console.error(error);
        return [];
    }
};