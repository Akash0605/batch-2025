const API_URL = "https://dummyjson.com/recipes";

const recipesContainer = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");

let recipes = [];


// ========================================
// Fetch Recipes
// ========================================

async function fetchRecipes() {
    try {
        showLoading();

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();

        recipes = data.recipes || [];

        renderRecipes(recipes);

    } catch (error) {
        console.error(error);

        recipesContainer.innerHTML = `
            <div class="error-message">
                <h2>Something went wrong</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}


// ========================================
// Render All Recipes
// ========================================

function renderRecipes(recipeList) {

    if (!recipeList || recipeList.length === 0) {
        recipesContainer.innerHTML = `
            <div class="no-results">
                <h2>No recipes found</h2>
                <p>Try searching for another recipe.</p>
            </div>
        `;

        return;
    }


    recipesContainer.innerHTML = recipeList
        .map(recipe => createRecipeCard(recipe))
        .join("");
}


// ========================================
// Create Recipe Card
// ========================================

function createRecipeCard(recipe) {

    // Your API image can be:
    //
    // "[https://example.com/image.webp](https://example.com/image.webp)"
    //
    // Extract the actual URL.

    const imageUrl = getImageUrl(recipe.image);


    const tags = recipe.tags
        ?.map(tag => `
            <span class="recipe-tag">
                #${escapeHtml(tag)}
            </span>
        `)
        .join("") || "";


    const mealTypes = recipe.mealType
        ?.map(type => `
            <span class="meal-type">
                ${escapeHtml(type)}
            </span>
        `)
        .join("") || "";


    return `
        <article class="recipe-card">

            <!-- Image -->

            <div class="recipe-image-wrapper">

                <img
                    src="${imageUrl}"
                    alt="${escapeHtml(recipe.name)}"
                    class="recipe-image"
                    loading="lazy"
                >

                <span class="difficulty">
                    ${escapeHtml(recipe.difficulty)}
                </span>

                <span class="cuisine">
                    ${escapeHtml(recipe.cuisine)}
                </span>

            </div>


            <!-- Content -->

            <div class="recipe-content">

                <!-- Recipe Name -->

                <h2 class="recipe-title">
                    ${escapeHtml(recipe.name)}
                </h2>


                <!-- Rating -->

                <div class="rating">

                    <span class="star">
                        ★
                    </span>

                    <strong>
                        ${recipe.rating}
                    </strong>

                    <span class="review-count">
                        (${recipe.reviewCount} reviews)
                    </span>

                </div>


                <!-- Time Information -->

                <div class="recipe-info">

                    <div class="info-item">

                        <span class="info-icon">
                            ⏱
                        </span>

                        <div>
                            <small>Prep</small>
                            <strong>
                                ${recipe.prepTimeMinutes} min
                            </strong>
                        </div>

                    </div>


                    <div class="info-item">

                        <span class="info-icon">
                            🔥
                        </span>

                        <div>
                            <small>Cook</small>
                            <strong>
                                ${recipe.cookTimeMinutes} min
                            </strong>
                        </div>

                    </div>


                    <div class="info-item">

                        <span class="info-icon">
                            👥
                        </span>

                        <div>
                            <small>Servings</small>
                            <strong>
                                ${recipe.servings}
                            </strong>
                        </div>

                    </div>

                </div>


                <!-- Calories -->

                <div class="calories">

                    <span>
                        Calories
                    </span>

                    <strong>
                        ${recipe.caloriesPerServing} kcal
                    </strong>

                </div>


                <!-- Meal Type -->

                <div class="meal-types">
                    ${mealTypes}
                </div>


                <!-- Tags -->

                <div class="tags">
                    ${tags}
                </div>


                <!-- Button -->

                <button
                    class="view-recipe-btn"
                    onclick="viewRecipe(${recipe.id})"
                >
                    View Recipe
                </button>

            </div>

        </article>
    `;
}


// ========================================
// Extract Image URL
// ========================================

function getImageUrl(image) {

    if (!image) {
        return "";
    }


    // Markdown format:
    //
    // [https://example.com/image.webp](https://example.com/image.webp)

    const markdownMatch = image.match(/\((.*?)\)/);

    if (markdownMatch) {
        return markdownMatch[1];
    }


    return image;
}


// ========================================
// Search Recipes
// ========================================

function searchRecipes(keyword) {

    const searchValue = keyword
        .trim()
        .toLowerCase();


    if (!searchValue) {

        renderRecipes(recipes);

        return;
    }


    const filteredRecipes = recipes.filter(recipe => {

        const name = recipe.name?.toLowerCase() || "";

        const cuisine = recipe.cuisine?.toLowerCase() || "";

        const difficulty = recipe.difficulty?.toLowerCase() || "";


        const tags = recipe.tags
            ?.join(" ")
            .toLowerCase() || "";


        const ingredients = recipe.ingredients
            ?.join(" ")
            .toLowerCase() || "";


        return (
            name.includes(searchValue) ||
            cuisine.includes(searchValue) ||
            difficulty.includes(searchValue) ||
            tags.includes(searchValue) ||
            ingredients.includes(searchValue)
        );
    });


    renderRecipes(filteredRecipes);
}


// ========================================
// View Recipe
// ========================================

function viewRecipe(recipeId) {

    const recipe = recipes.find(
        item => item.id === recipeId
    );


    if (!recipe) {
        return;
    }


    console.log("Selected Recipe:", recipe);


    // You can redirect to a details page:
    //
    // window.location.href =
    //     `recipe-details.html?id=${recipe.id}`;


    showRecipeModal(recipe);
}


// ========================================
// Recipe Details Modal
// ========================================

function showRecipeModal(recipe) {

    const imageUrl = getImageUrl(recipe.image);


    const ingredients = recipe.ingredients
        ?.map(ingredient => `
            <li>
                ${escapeHtml(ingredient)}
            </li>
        `)
        .join("") || "";


    const instructions = recipe.instructions
        ?.map((instruction, index) => `
            <li>
                <span class="step-number">
                    ${index + 1}
                </span>

                <span>
                    ${escapeHtml(instruction)}
                </span>
            </li>
        `)
        .join("") || "";


    const modal = document.createElement("div");

    modal.className = "recipe-modal";


    modal.innerHTML = `

        <div class="modal-overlay"></div>


        <div class="modal-content">

            <button
                class="modal-close"
                onclick="closeRecipeModal()"
            >
                ×
            </button>


            <img
                src="${imageUrl}"
                alt="${escapeHtml(recipe.name)}"
                class="modal-image"
            >


            <div class="modal-body">

                <h1>
                    ${escapeHtml(recipe.name)}
                </h1>


                <div class="modal-rating">
                    ⭐ ${recipe.rating}
                    (${recipe.reviewCount} reviews)
                </div>


                <div class="modal-stats">

                    <div>
                        <small>Prep Time</small>
                        <strong>
                            ${recipe.prepTimeMinutes} min
                        </strong>
                    </div>

                    <div>
                        <small>Cook Time</small>
                        <strong>
                            ${recipe.cookTimeMinutes} min
                        </strong>
                    </div>

                    <div>
                        <small>Servings</small>
                        <strong>
                            ${recipe.servings}
                        </strong>
                    </div>

                    <div>
                        <small>Calories</small>
                        <strong>
                            ${recipe.caloriesPerServing} kcal
                        </strong>
                    </div>

                </div>


                <h2>
                    Ingredients
                </h2>

                <ul class="ingredients-list">
                    ${ingredients}
                </ul>


                <h2>
                    Instructions
                </h2>

                <ol class="instructions-list">
                    ${instructions}
                </ol>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    // Prevent background scrolling

    document.body.style.overflow = "hidden";
}


// ========================================
// Close Modal
// ========================================

function closeRecipeModal() {

    const modal =
        document.querySelector(".recipe-modal");


    if (modal) {
        modal.remove();
    }


    document.body.style.overflow = "";
}


// ========================================
// Loading State
// ========================================

function showLoading() {

    recipesContainer.innerHTML = `

        <div class="loading">

            <div class="spinner"></div>

            <p>
                Loading recipes...
            </p>

        </div>
    `;
}


// ========================================
// HTML Escape
// ========================================

function escapeHtml(value) {

    if (value === null || value === undefined) {
        return "";
    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ========================================
// Search Event
// ========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            searchRecipes(event.target.value);

        }
    );
}


// ========================================
// Start Application
// ========================================

fetchRecipes();