import React, { useState, useEffect } from "react";
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
    <S.Input
      type="text"
      placeholder="Search for products..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;

