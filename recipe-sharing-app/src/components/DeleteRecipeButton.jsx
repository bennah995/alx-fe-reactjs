import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }){
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  }

  return(
    <button
      onClick={() =>deleteRecipe(recipeId)}
      style={{marginTop: 10, color: 'red'}}
    >
      Delete
    </button>
  )
}