
export async function fetchCalories(query) {
    const apiKey = import.meta.env.VITE_RECIPE_API_KEY;

    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('failed')
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('error during call', error)
    }
}