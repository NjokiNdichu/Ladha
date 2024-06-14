import React from "react";
import RecipeCard from "./RecipeCard";

const FavoriteRecipes = ({ favorites, onRemove }) => {
  return (
    <div className="favorite-recipes">
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <div key={recipe.idMeal}>
              <RecipeCard recipe={recipe} onSelect={() => {}} />
              <button onClick={() => onRemove(recipe)}>Remove from Favorites</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteRecipes;
