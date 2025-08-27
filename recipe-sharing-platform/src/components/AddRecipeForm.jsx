import React from "react";
import { useState } from "react";

export default function AddRecipeForm({onAddRecipe}){
  const[title, setTitle] = useState("");
  const[ingredients, setIngredients] = useState("");
  const[steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  // Validation function
  const validate = () => {
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Title is required";
    if (!description.trim()) tempErrors.description = "Description is required";
    return tempErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(!title || !ingredients || !steps){
      setErrors("All Fields must be filled")
      return;
    }

    const ingredientsArray = ingredients.split(",").map(item => item.trim());
    if(ingredientsArray.length < 2){
      setErrors("Please provide at least two ingridients, or use commas(rice, water, chilli etc)")
      return;
    }

    //passing the data to the parent
    onAddRecipe({
      id: Date.now(),
      title, 
      ingredients: ingredientsArray,
      steps,
    });

    setErrors("");
    //reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  }

  return(
    <form 
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
      
      <h2 className="text-xl text-black font-bold text-center">Add New Recipe</h2>
      
      {error && <p className="text-red-500">{error}</p>}

      {/* Title */}
      <input 
      type="text"
      placeholder="Recipe Title"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      className="w-full p-2 text-black border rounded-md focus:outline focus:ring-2 focus:ring-blue-500"
      />

      {/* Ingredients */}
      <textarea 
        placeholder="Ingredients (separate with commas e.g.: Rice, Chicken, Salt, Paprica...)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 text-black border rounded-md focus:outline focus:ring-2 focus:ring-blue-500"
      />

      {/* Cooking steps */}
      <textarea 
        placeholder="Preparation steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full text-black p-2 border rounded-md h-60 focus:outline focus:ring-2 focus:ring-blue-500"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Add Recipe
      </button>


    </form>
  )
}

