import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams(); // gets recipe id from URL
  const navigate = useNavigate();

  const recipe = recipeData.find((recipe) => recipe.id.toString() === id);

  if (!recipe) {
    return (
      <p className="text-center mt-10 text-red-500">Recipe not found</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700">{recipe.summary}</p>

        {/* Ingredients Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
