import React, { useState } from 'react';
import Input from './Input';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <Input
        label=""
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
