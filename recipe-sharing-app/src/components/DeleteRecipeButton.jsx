import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }){
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return(
    <button
      onClick={() =>deleteRecipe(recipeId)}
      style={{marginTop: 10, color: 'red'}}
    >
      Delete
    </button>
  )
}