import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import * as S from "./index.styles";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchTerm, onSearch]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.SearchContainer>
      <FaSearch className="search-icon" />
      <S.Input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </S.SearchContainer>
  );
}

export default SearchBar;



