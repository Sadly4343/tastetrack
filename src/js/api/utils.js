//Loadpartial Function to fetch Footer and Header partials.
export async function loadPartial(selector, file) {
    try {
        const response = await fetch(file);
        const content = await response.text();
        document.querySelector(selector).innerHTML = content;

    } catch (error) {
        console.error(`Error loading file ${file}`, error);
    }
}
