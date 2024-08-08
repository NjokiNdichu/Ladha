import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Rating from "./Rating";

const RecipeCard = ({ recipe, onSelect, onToggleFavorite, isFavorite, onRate }) => {
  const { strMeal, strCategory, strMealThumb } = recipe;

  return (
    <div className="card">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="card-image"
        onClick={() => onSelect(recipe)}
      />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <div
          className="favorite-icon"
          onClick={() => onToggleFavorite(recipe.idMeal)}
        >
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
        <Rating
          recipeId={recipe.idMeal}
          currentRating={recipe.rating || 0}
          onRate={onRate}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
