import React from "react";
import "../css/SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <div className="search-container">
        <input
          className="input-search"
          placeholder="Search for Category, Name, ID and etc.."
        ></input>
        <button className="btn-search">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchBar;
