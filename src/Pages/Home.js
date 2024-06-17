import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Ladha Recipes</h1>
      <p>
        Your one-stop destination for delightful and delicious recipes from
        around the world.
      </p>
      <div className="home-content">
        <div className="home-section">
          <h2>Discover New Recipes</h2>
          <p>
            Explore a wide variety of recipes, from appetizers to desserts,
            curated to satisfy your culinary cravings.
          </p>
          <Link to="/search" className="home-button">
            Explore Recipes
          </Link>
        </div>
        <div className="home-section">
          <h2>Save Your Favorites</h2>
          <p>
            Create a personalized collection of your favorite recipes and access
            them anytime, anywhere.
          </p>
          <Link to="/favorites" className="home-button">
            View Favorites
          </Link>
        </div>
        <div className="home-section">
          <h2>Join Our Community</h2>
          <p>
            Share your own recipes, get cooking tips, and connect with fellow
            food enthusiasts.
          </p>
        </div>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <p>
          Stay connected and get the latest updates from us on social media.
        </p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
