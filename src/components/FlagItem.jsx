import React from 'react';

const FlagItem = (props) => {
  const { name, flag, languages, population, capital, region } = props.info;

  const clickedCard = (e) => {
    props.itemClick(e.target.alt);
  };

  return (
    <div onClick={(e) => clickedCard(e)} className="output-card">
      <img className="flag-img" src={flag} alt={name} />
      <div className="flag-info">
        <h1 className="flag-capital-txt">{name}</h1>
        <p></p>
        <div className="flag-info-text-container">
          <div className="flag-info-text-headers">
            <p>Capital:</p>
            <p>Continent:</p>
            <p>Population:</p>
            <p>Language:</p>
          </div>
          <div>
            <p>{capital}</p>
            <p>{region}</p>
            <p>{population}</p>
            <p>{languages[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagItem;
