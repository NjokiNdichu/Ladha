import React, { useState } from "react";

const AddRecipe = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    strMeal: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strMealThumb: "",
    ingredients: [],
    measures: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      idMeal: Date.now().toString(),
      ...formData,
    };
    onAdd(newRecipe);
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <label>
        Meal Name:
        <input type="text" name="strMeal" value={formData.strMeal} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="strCategory" value={formData.strCategory} onChange={handleChange} />
      </label>
      <label>
        Area:
        <input type="text" name="strArea" value={formData.strArea} onChange={handleChange} />
      </label>
      <label>
        Instructions:
        <textarea name="strInstructions" value={formData.strInstructions} onChange={handleChange}></textarea>
      </label>
      <label>
        Image URL:
        <input type="text" name="strMealThumb" value={formData.strMealThumb} onChange={handleChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
