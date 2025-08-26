import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json"
import { useState, useEffect } from "react";


const RecipeDetail = () => {
  const { id } = useParams(); //gets recipr id from URL
  const navigate = useNavigate();

  const recipe = recipeData.find(recipe => recipe.id === parseInt(id));

  if(!recipe){
    return(
      <p className="text-center mt-10 text-red-500">Recipe not found</p>
    );
  }

  return(
    <div className="container mx-auto p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        onClick={() => navigate(-1)}
        >
         ← Back
      </button>

      <div className="bg-white rounded-1g shadow-md p-6">
        <img 
         src={recipe.image} alt={recipe.title}
         className="w-full h-64 object-cover rounded-1g mb-6"
        />
        <h1 className="text-3x1 font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700">{recipe.summary}</p>
      </div>
    </div>
  )

}

export default RecipeDetail;