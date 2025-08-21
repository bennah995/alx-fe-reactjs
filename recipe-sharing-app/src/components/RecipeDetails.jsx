import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* Edit and Delete functionality */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
