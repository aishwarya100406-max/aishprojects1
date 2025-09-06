const ingredientInput=document.getElementById('ingredientInput');
const searchRecipe=document.getElementById('searchRecipe');
const recipeResults=document.getElementById('recipeResults');

searchRecipe.addEventListener('click',()=>{
  const ing=ingredientInput.value.trim();
  if(!ing) return;
  recipeResults.innerHTML='Loading...';
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
    .then(r=>r.json())
    .then(data=>{
      if(!data.meals){ recipeResults.innerHTML='No recipes found'; return; }
      recipeResults.innerHTML='';
      data.meals.forEach(m=>{
        const div=document.createElement('div'); div.className='recipeCard';
        div.innerHTML=`<img src="${m.strMealThumb}" alt="${m.strMeal}"><span>${m.strMeal}</span>`;
        recipeResults.appendChild(div);
      });
    }).catch(()=>recipeResults.innerHTML='Error fetching recipes');
});
