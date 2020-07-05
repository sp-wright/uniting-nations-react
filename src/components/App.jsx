import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlagItem from './FlagItem';
import Heading from './Heading';
import SearchField from './SearchField';
import SingleFlagItem from './SingleFlagItem';

const App = () => {
  const [flags, setFlags] = useState([]);
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getFlags = async () => {
      const res = await axios(query === '' ? `https://restcountries.eu/rest/v2/` : `https://restcountries.eu/rest/v2/name/${query}`);
      setFlags(res.data);
    };
    getFlags();
  }, [query]);

  const itemClick = (i) => {
    setQuery(i);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setQuery('');
  };

  return (
    <div>
      <Heading closeModal={closeModal} />
      {!modal && <SearchField searchCountry={(q) => setQuery(q)} />}
      <div className="flag-list-container">
        {!modal ? flags.map((flag, i) => <FlagItem itemClick={itemClick} info={flag} index={i} key={i} />) : flags.length < 4 && <SingleFlagItem closeModal={closeModal} item={flags} />}
      </div>
    </div>
  );
};

export default App;
