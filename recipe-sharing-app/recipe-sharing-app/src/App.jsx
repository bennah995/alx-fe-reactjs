import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipeDetails from './RecipeDetails';
import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './store/recipeStore';




function App() {
  return (
    <div className="App">
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};


const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);
// Sample data
  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: 'Spaghetti Bolognese', description: 'Tasty meat sauce with pasta.' },
      { id: 2, title: 'Mango Smoothie', description: 'A refreshing fruit drink.' },
      { id: 3, title: 'Avocado Toast', description: 'Simple and nutritious breakfast.' },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;


