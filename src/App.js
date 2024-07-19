import React, { useState } from 'react';
import './App.css';

function App() {
  const defaultRecipes = [
    {
      recipe: {
        label: 'Chicken Curry',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfg7zfZUjoxfxSYYxS4Gua_fO6zCe5_nbd9Zedbfaj4jyV_zJy8-JpBPT0Q&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qP1g8i5Af6eumlBDSjCexmpbzKIBmi_ZyoR8U7BBcnX9hPhT_YStTimCug&s',
        price:'199 rs/-',
      },
    },
    {
      recipe: {
        label: 'Vegetable Pasta',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv52W2LrmKO8H_w8PwiVr1AF47f4zq1HQOnw&s',
        price:'199 rs/-',
      },
    },
    {
      recipe: {
        label: 'Biryani',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZQK0BNyL3pHWXxGd-AHcHnVd9oAPWfk49A&s',
        price:'199 rs/-',
      },
    },
    {
      recipe: {
        label: 'Burger',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hlIqvGPOV7bAYmxXNsjDI3NGTBDOyjk4_w&s', // Replace with actual image URL
        price:'199 rs/-',
      },
    },
    {
      recipe: {
        label: 'Samosa',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBHGI8UpNsGpnRMFINlw1uIXTvBj8EUZBGA&s', // Replace with actual image URL
        price:'199 rs/-',
      },
    },
  ];

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(defaultRecipes);

  const submitHandler = async (e) => {
    e.preventDefault();
    const appId = '8e8ac8de'; // Replace with your Edamam API App ID
    const appKey = '02aaeeb5389376d446f6c03d5e32a0a5'; // Replace with your Edamam API Key
    const url = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.error('Error fetching the recipes:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
        <span className="logo-foodie">Foodie</span>
        <span className="logo-by">by S7</span>
        </div>
        <div className='navbar-actions'>
        <div className='cart'>
        <i className='fas fa-shopping-cart'></i>
        </div>
        <div className='account'>
        <i className='fas fa-user-circle'></i>
        <div className='account-menu'>
        <p>Sudhakar</p>
        <ul>
         <li>Profile</li>
         <li>Orders</li>
         <li>Logout</li>
        </ul>
        </div>
        </div>
        </div>
      </nav>
      <div className="container">
        <h4>Food Recipes</h4>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
          />
          <input type="submit" value="Search" />
        </form>
        <div className="recipes">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <h5>{recipe.recipe.label}</h5>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <p className="recipe-price">{recipe.recipe.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
