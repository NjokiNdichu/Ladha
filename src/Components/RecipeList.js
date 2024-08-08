import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onSelect, onToggleFavorite, favorites, onRate }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(recipe.idMeal)}
          onRate={onRate}
        />
      ))}
    </div>
  );
};

export default RecipeList;
