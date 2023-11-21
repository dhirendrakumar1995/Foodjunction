import createNavbar  from "./component/Navbar/navbar.js";

function createMealCard(meal) {
    const mealCard = document.createElement('div');
    mealCard.className = 'meal-card';
    mealCard.innerHTML = `
        <h4>${meal.strMeal}</h4>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    `;
    return mealCard;
}

function appendMealsToDiv(meals, dataDiv) {
    meals.forEach(meal => {
        const mealCard = createMealCard(meal);
        dataDiv.appendChild(mealCard);
    });
}

async function fetchMeals(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
}

async function displayAllMeals() {
    const dataDiv = document.querySelector('.data-container');
    const meals = await fetchMeals("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    appendMealsToDiv(meals, dataDiv);
}

async function searchAndDisplayMeals() {
    const dataDiv = document.querySelector('.data-container');
    const searchInput = document.querySelector('.navbar-search-input');
    dataDiv.innerHTML = '';
    const meals = await fetchMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`);
    appendMealsToDiv(meals, dataDiv);
}

function setupEventListeners() {
    const dayButton = document.getElementById('day');
    dayButton.addEventListener("click", () => window.location.href = "recipeOfTheDay.html");

    const latestButton = document.getElementById('latest');
    latestButton.addEventListener("click", () => window.location.href = "showLatestRecipe.html");

    const searchButton = document.getElementById('btn');
    searchButton.addEventListener('click', searchAndDisplayMeals);
}

function initializeApp() {
    document.body.appendChild(createNavbar());
    const dataDiv = document.createElement('div');
    dataDiv.className = 'data-container';
    document.body.appendChild(dataDiv);

    displayAllMeals();
    setupEventListeners();
}

initializeApp();
