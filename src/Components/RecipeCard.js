import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  const { strMeal, strCategory, strMealThumb } = recipe;

  return (
    <div className="card" onClick={() => onSelect(recipe)}>
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
