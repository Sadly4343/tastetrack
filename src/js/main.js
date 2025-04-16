//Imports
import { displayRecipes } from "./recipe";
import { loadPartial } from "./api/utils";
import { createPagination } from "./pagination"

//Attach EventListener to Search Button
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

//Loads Header Partial and AddEvent to Hamburger Menu Icon
loadPartial('#header-section', '/tastetrack/src/components/header.html').then(() => {
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
      toggleMenu();
    });
  }
});

//Loads Footer Partial
loadPartial('#footer-section', '/tastetrack/src/components/footer.html');

//Toggle Menu Function
function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  const hamburgerX = document.querySelector("#hamburger-x");
  const hamburgerEqual = document.querySelector("#hamburger-equal");


  navMenu.classList.toggle("menu-active");


  hamburgerX.classList.toggle("hidden");
  hamburgerEqual.classList.toggle("hidden");
}





//Creates Pagination on page and Default DisplayRecipes() Call to fill Page.
displayRecipes('egg'); 
