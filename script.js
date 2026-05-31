async function searchRecipe() {
  let query = document.getElementById("search").value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  let results = document.getElementById("results");
  results.innerHTML = "";

  if (data.meals) {
    data.meals.forEach(meal => {
      let card = `<div class="recipe-card">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h3>${meal.strMeal}</h3>
                    <p>${meal.strArea}</p>
                  </div>`;
      results.innerHTML += card;
    });
  } else {
    results.innerHTML = "<p>No recipes found.</p>";
  }
}
