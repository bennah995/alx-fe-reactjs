import './App.css';

import RecipeList from './components/RecipeList';
import AddRecipeform from './components/AddRecipeForm';

function App() {
  return (
     <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeform />
      <RecipeList />
     </div>
  )
}

export default App
