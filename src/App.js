import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetail";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteRecipes");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [ratings, setRatings] = useState(() => {
    const savedRatings = localStorage.getItem("ratings");
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  const fetchRecipes = useCallback(async (searchQuery = "") => {
    try {
      const response = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const updatedRecipes = data.meals.map(meal => ({
        ...meal,
        rating: ratings[meal.idMeal] || 0
      }));
      setRecipes(updatedRecipes);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [ratings]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchRecipes(query);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  const toggleFavorite = (recipeId) => {
    if (favoriteRecipes.includes(recipeId)) {
      setFavoriteRecipes(favoriteRecipes.filter((id) => id !== recipeId));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipeId]);
    }
  };

  const handleRate = (recipeId, ratingValue) => {
    const newRatings = { ...ratings, [recipeId]: ratingValue };
    setRatings(newRatings);
    localStorage.setItem("ratings", JSON.stringify(newRatings));
    const updatedRecipes = recipes.map((recipe) => 
      recipe.idMeal === recipeId ? { ...recipe, rating: ratingValue } : recipe
    );
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <>
                <SearchBar
                  query={query}
                  setQuery={setQuery}
                  handleSubmit={handleSearch}
                  isLoading={loading}
                />
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {!loading && !error && !selectedRecipe && (
                  <RecipeList
                    recipes={recipes}
                    onSelect={handleSelectRecipe}
                    onToggleFavorite={toggleFavorite}
                    favorites={favoriteRecipes}
                    onRate={handleRate}
                  />
                )}
                {!loading && !error && selectedRecipe && (
                  <RecipeDetails
                    recipe={selectedRecipe}
                    onBack={handleBackToRecipes}
                  />
                )}
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteRecipes={favoriteRecipes}
                recipes={recipes}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
