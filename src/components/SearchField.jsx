import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const SearchField = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchFlag = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    props.searchCountry(value);
  };

  return (
    <div className="search-field">
      <TextField onChange={searchFlag} fullWidth label="Start Searching..." value={searchTerm} />
    </div>
  );
};

export default SearchField;
