import React, { useEffect, useState } from "react";
import "./App.css";
import Repcipe from "./components/Repcipe";

const App = () => {
  const app_id = "0fdb2f51";
  const app_key = "bc0f66e656a1e19608a4331e32fd46e8";
  const [recipe, setrepcipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("broccoli");

  const getrepcipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setrepcipe(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getrepcipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getsearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input
          className="Search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="Search-button" type="submit">
          Search
        </button>
      </form>
      <div className="RepcipeBoard">
        {recipe.map((recipe) => (
          <Repcipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
