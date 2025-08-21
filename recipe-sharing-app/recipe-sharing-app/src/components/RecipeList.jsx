import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No recipes found.</p>
      )}
    </div>
  );
};


const RecipeCard = ({ recipe }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id);
  };

  return (
    <div>
      <h3>{recipe.title}</h3>
      <button onClick={toggleFavorite}>
        {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
      </button>
    </div>
  );
};
export default RecipeList;
