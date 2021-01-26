// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

// == Import
import './styles.scss';

// Import composant
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import RepoResults from 'src/components/RepoResults';
import Loader from 'src/components/Loader';
import Button from 'src/components/Button';

// == Composant
const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [numberOfRepo, setNumberOfRepo] = useState(9);
  const [message, setMessage] = useState('Bienvenue, faites une recherche dans tous les repos présent sur Github');

  // Search in API

  const handleSearchAPI = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=1&per_page=${numberOfRepo}`)
      .then((response) => {
        setRepositories(response.data);
        setMessage(`La recherche a donnée ${response.data.total_count} résultat(s)`);
        setDisplay(true);
      })
      .catch((error) => {
        console.log(error);
        setRepositories([]);
        setMessage('Une erreur est survenue');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Click on the button for more Repo to load

  const handleMoreRepo = () => {
    setSecondLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=1&per_page=${numberOfRepo + 9}`)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSecondLoading(false);
        setDisplay(true);
        setNumberOfRepo(numberOfRepo + 9);
      });
  };

  return (
    <div className="app">
      <div className="container">
        <SearchBar
          searchApi={handleSearchAPI}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Message message={message} />
        {loading && <Loader />}
        {display && <RepoResults {...repositories} />}
        {secondLoading && <Loader /> }
        {(repositories.total_count !== 0 && display && <Button moreRepo={handleMoreRepo} />)}
      </div>
    </div>
  );
};

// == Export
export default App;
