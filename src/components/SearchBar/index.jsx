import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as S from './index.styles';

/**
 * SearchBar Component
 *
 * Provides a search input field with a debounce effect to limit the number of search executions.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {function} props.onSearch - Function to handle search input changes.
 * @returns {JSX.Element} The rendered SearchBar component.
 */

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

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
      <label htmlFor="search" className="sr-only">
        Search for products
      </label>
      <FaSearch className="search-icon" />
      <S.Input
        id="search"
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </S.SearchContainer>
  );
}

export default SearchBar;
