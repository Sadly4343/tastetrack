import{l as t}from"./utils-DXdLGH_B.js";document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("watchlist");e&&JSON.parse(e).forEach(s=>{r(s)})});function r(e){const n=document.createElement("div");n.classList.add("card"),n.innerHTML=`<span id="closeBtn" class="close">&times;</span><h2>${e.name}</h2>
    <img class="modal-img" src="${e.image}" alt="${e.name}">
            <div class="info-container">
                <div class="info"><p class="time">${e.minutes}</p><p>Minutes</p></div>
                <div class="info"><p class="ingredients">${e.ingredients}</p><p>Servings</p></div>
                <div class="info"><p class="serving">${e.servings}</p><p>Ingredients</p></div>
    
               
            </div>
        <div class="allergies">
            <p>Gluten Free: ${e.gluten}</p>
            <p>Vegan: ${e.vegan}</p>
            <p>Vegetarian: ${e.vegetarian}</p>
            <p>Healthy: ${e.healthy}</p>
        </div>
     <p>${e.instructions}</p>
     <p class="summary" >Gluten Free: ${e.summary}}</p>`,document.querySelector("#recipeContainer").appendChild(n)}t("#header-section","/tastetrack/src/components/header.html").then(()=>{const e=document.querySelector("#hamburger-menu");e&&(console.log("hamburger menu found "),e.addEventListener("click",()=>{c()}))});t("#footer-section","/tastetrack/src/components/footer.html");function c(){const e=document.querySelector("nav ul"),n=document.querySelector("#hamburger-x"),s=document.querySelector("#hamburger-equal");e.classList.toggle("menu-active"),n.classList.toggle("hidden"),s.classList.toggle("hidden")}
