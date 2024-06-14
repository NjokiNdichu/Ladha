import React from "react";

const RecipeDetails = ({ recipe, onBack }) => {
  if (!recipe) {
    return <div>No recipe selected</div>;
  }

  return (
    <div className="recipe-details">
      <button onClick={onBack}>Back to Recipes</button>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
      <h2 className="recipe-title">{recipe.strMeal}</h2>
      <p className="recipe-category"><strong>Category:</strong> {recipe.strCategory}</p>
      <p className="recipe-area"><strong>Area:</strong> {recipe.strArea}</p>
      <h3>Instructions</h3>
      <p className="recipe-instructions">{recipe.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul className="recipe-ingredients">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
          const ingredient = recipe[`strIngredient${index}`];
          const measure = recipe[`strMeasure${index}`];
          return (
            ingredient && (
              <li key={index}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeDetails;
