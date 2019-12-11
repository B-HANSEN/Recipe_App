import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '5ed30c36';
  const APP_KEY = '327d7c23d17804324991002298b79eef';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

// add query to fetch data only when search submitted
  useEffect( () => {
    getRecipes();
  }, [query])

// replace with own id & key
// insert query variable and set it to default chicken
  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

// relates to onChange()-method
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  // after submission, clear field with setSearch back to ''
  const getSearch = e => {
    e.preventDefault();
    setQuery(search); 
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={ getSearch} className="search-form">
        <input className="search-bar" type="text" value={ search } onChange={ updateSearch } />
        <button
          className="search-button"
          type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        { recipes.map(recipe => (
          <Recipe
            key = { recipe.recipe.label }
            title = { recipe.recipe.label }
            calories = { recipe.recipe.calories }
            image = { recipe.recipe.image }
            ingredients = { recipe.recipe.ingredients }
            />
        ))}
      </div>
    </div>
  )
}






export default App;