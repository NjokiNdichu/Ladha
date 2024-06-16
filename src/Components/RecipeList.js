import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onSelect, onToggleFavorite, favorites }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(recipe.idMeal)}
        />
      ))}
    </div>
  );
};

export default RecipeList;
