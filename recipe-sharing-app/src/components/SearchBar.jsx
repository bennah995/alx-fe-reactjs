import React from "react";
import { useRecipeStore } from "./recipeStore";

function SearchBar(){
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return(
    <input 
      type="text" 
      placeholder="Search recipes here..." 
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ padding: "8px", marginBottom: "16px", width: "100%" }}
    />
  );
}

export default SearchBar;