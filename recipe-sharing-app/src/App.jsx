import './App.css';

import {BrowserRouter as Routes, Route, Link } from 'react-router-dom'
import RecipeDetails from './components/recipeDetails';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

import { useParams } from 'react-router-dom';

function App() {
  return (
    <div style={{ maxWidth: 680, margin: '40px auto' }}>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route
          path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        {/* Recipe details route */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

function RecipeDetailsWrapper(){
  const {id} = useParams();
  return <RecipeDetails recipeId={id} />
}

export default App
