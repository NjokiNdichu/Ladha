import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetail";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import Favorites from "./Components/Favorites";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const fetchRecipes = async (searchQuery = "") => {
    try {
      const response = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipes(data.meals || []);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

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

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
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
