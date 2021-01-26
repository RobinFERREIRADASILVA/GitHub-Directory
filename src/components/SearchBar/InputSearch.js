import React, { useRef, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const InputSearch = ({ inputValue, setInputValue }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Input
      icon="search"
      iconPosition="left"
      placeholder="Search..."
      className="search-bar-input"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      ref={inputEl}
    />
  );
};

InputSearch.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default InputSearch;
