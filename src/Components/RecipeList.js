import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default RecipeList;
