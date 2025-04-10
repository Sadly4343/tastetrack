
import { displayRecipes } from "./recipe";
import { loadPartial } from "./api/utils";
import { createPagination } from "./pagination"


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




loadPartial('#header-section', '/src/components/header.html')
loadPartial('#footer-section', '/src/components/footer.html')


createPagination();
displayRecipes('egg'); 
