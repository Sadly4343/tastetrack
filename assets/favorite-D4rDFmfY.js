import{l as i}from"./utils-CpSS0xmB.js";document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("watchlist");e&&JSON.parse(e).forEach(t=>{c(t)})});function c(e){const n=document.createElement("div");n.classList.add("card");let t="";e.eachingredient&&e.preparation&&e.preparation.length>0&&e.eachingredient.forEach((s,r)=>{t+=`<li class="ingredient" >${s}:  ${e.preparation[r]}`}),n.innerHTML=`<span id="closeBtn" class="close">&times;</span><h2>${e.name}</h2>
    <img class="modal-img" src="${e.image}" alt="${e.name}">
            <div class="info-container">
                <div class="info"><p class="time">${e.minutes}</p><p>Minutes</p></div>
                <div class="info"><p class="ingredients">${e.servings}</p><p>Servings</p></div>
                <div class="info"><p class="serving">${e.ingredients}</p><p>Ingredients</p></div>
    
               
            </div>
        <div class="allergies">
            <p>Gluten Free: ${e.gluten}</p>
            <p>Vegan: ${e.vegan}</p>
            <p>Vegetarian: ${e.vegetarian}</p>
            <p>Healthy: ${e.healthy}</p>
        </div>
         <ul id="ingredientContainer">
        ${t}
     </ul>
     <p>${e.instructions}</p>
     <p class="summary" >Gluten Free: ${e.summary}}</p>
    `,document.querySelector("#recipeContainer").appendChild(n)}i("#header-section","/tastetrack/src/components/header.html").then(()=>{const e=document.querySelector("#hamburger-menu");e&&e.addEventListener("click",()=>{o()})});i("#footer-section","/tastetrack/src/components/footer.html");function o(){const e=document.querySelector("nav ul"),n=document.querySelector("#hamburger-x"),t=document.querySelector("#hamburger-equal");e.classList.toggle("menu-active"),n.classList.toggle("hidden"),t.classList.toggle("hidden")}
