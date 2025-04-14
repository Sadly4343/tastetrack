import{l as n}from"./utils-D7H65duc.js";/* empty css              */document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("watchlist");e&&JSON.parse(e).forEach(i=>{t(i)})});function t(e){const s=document.createElement("div");s.classList.add("card"),s.innerHTML=`<span id="closeBtn" class="close">&times;</span><h2>${e.name}</h2>
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
     <p class="summary" >Gluten Free: ${e.summary}}</p>`,document.querySelector("#recipeContainer").appendChild(s)}n("#header-section","/src/components/header.html");n("#footer-section","/src/components/footer.html");
