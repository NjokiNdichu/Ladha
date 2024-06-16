// src/Components/Favorites.js
import React from "react";
import { FaHeart } from "react-icons/fa";

const Favorites = ({ favoriteRecipes, recipes, toggleFavorite }) => {
  const favoritedRecipes = recipes.filter((recipe) =>
    favoriteRecipes.includes(recipe.idMeal)
  );

  return (
    <div className="favorites">
      <h2>Favorited Recipes</h2>
      {favoritedRecipes.length > 0 ? (
        <div className="favorites-list">
          {favoritedRecipes.map((recipe) => (
            <div key={recipe.idMeal} className="favorite-recipe-card">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="favorite-recipe-image"
              />
              <div className="favorite-recipe-details">
                <h3>{recipe.strMeal}</h3>
                <span className="category">{recipe.strCategory}</span>
                <div
                  className="favorite-icon"
                  onClick={() => toggleFavorite(recipe.idMeal)}
                >
                  <FaHeart color="red" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorited recipes yet.</p>
      )}
    </div>
  );
};

export default Favorites;
