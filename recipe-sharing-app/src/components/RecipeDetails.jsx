import { useRecipeStore } from './recipeStore';

export default function RecipeDetails({ recipeId }) {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id == recipeId) // use == for type flexibility
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
}
