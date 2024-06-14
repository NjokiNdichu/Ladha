import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          
        />
      ))}
    </div>
  );
}

export default RecipeList;

