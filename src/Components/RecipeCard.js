// // src/components/RecipeCard.js
// import React from "react";

// const RecipeCard = ({ recipe, onSelect }) => {
//   const { strMeal, strCategory, strMealThumb } = recipe;
//   return (
//     <div className="card" onClick={() => onSelect(recipe)}>
//       <img src={strMealThumb} alt={strMeal} className="card-image" />
//       <div className="card-body">
//         <span className="category">{strCategory}</span>
//         <h3>{strMeal}</h3>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

const RecipeCard = ({ recipe, onSelect, onToggleFavorite, isFavorite }) => {
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
      </div>
    </div>
  );
};

export default RecipeCard;
