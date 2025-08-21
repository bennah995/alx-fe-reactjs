import './App.css';

import Recipelist from './components/RecipeList';
import AddRecipeform from './components/AddRecipeForm';

function App() {
  return (
     <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeform />
      <Recipelist />
     </div>
  )
}

export default App
