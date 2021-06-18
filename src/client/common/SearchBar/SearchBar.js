import React, { useCallback, useState } from "react";
import { func } from "prop-types";

import iconSearch from "../../assets/images/ic_Search.png";
import "./style.scss";

const SearchBar = ({ onSearch = () => {} }) => {
  const [item, setItem] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSearch(item);
    },
    [onSearch, item]
  );

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setItem(value);
  }, []);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        name="search-input"
        value={item}
        onChange={handleChange}
        className="search-input"
        placeholder="Nunca dejes de buscar"
      />
      <button type="submit" className="search-button">
        <img src={iconSearch} />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: func,
};

export default SearchBar;
