import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = '5ed30c36';
  const APP_KEY = '327d7c23d17804324991002298b79eef';
  const exampleReq =
   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text" />
      <button className="search-button" type="submit">
        Search
      </button>
     </form>
    </div>
  )
}






export default App;