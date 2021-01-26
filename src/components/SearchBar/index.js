import React from 'react';
import PropTypes from 'prop-types';

import InputSearch from 'src/components/SearchBar/InputSearch';

import githubLogo from './logo-github.png';

import './searchbar.scss';

const SearchBar = ({ searchApi, inputValue, setInputValue }) => (
  <header className="search-bar">
    <img src={githubLogo} alt="logo GitHub" />
    <form onSubmit={searchApi}>
      <InputSearch inputValue={inputValue} setInputValue={setInputValue} />
    </form>
  </header>
);

SearchBar.propTypes = {
  searchApi: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchBar;
