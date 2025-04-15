
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








loadPartial('#header-section', '/tastetrack/src/components/header.html').then(() => {
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  if (hamburgerMenu) {
    console.log("hamburger menu found ")
    hamburgerMenu.addEventListener('click', () => {
      toggleMenu();
    });
  }
});

loadPartial('#footer-section', '/tastetrack/src/components/footer.html');

function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  const hamburgerX = document.querySelector("#hamburger-x");
  const hamburgerEqual = document.querySelector("#hamburger-equal");


  navMenu.classList.toggle("menu-active");


  hamburgerX.classList.toggle("hidden");
  hamburgerEqual.classList.toggle("hidden");
}






createPagination();
displayRecipes('egg'); 
