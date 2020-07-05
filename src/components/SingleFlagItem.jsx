import React from 'react';
import GoogleMapReact from 'google-map-react';

const SingleFlagItem = (props) => {
  const { name, flag, nativeName, region, capital, languages, population, currencies, area, timezones, callingCodes, latlng } = props.item[0];

  const center = {
    lat: latlng[0],
    lng: latlng[1],
  };

  const Marker = () => {
    return <img style={{ width: '20px' }} src={require('../images/marker.png')} alt="marker" />;
  };

  return (
    <div className="output-single-card">
      <div className="output-single-text">
        <h1 className="output-single-title">{name}</h1>
        <h2 className="output-single-subtitle">({nativeName})</h2>
        <h4>Continent:</h4>
        <p>{region}</p>
        <h4>Capital:</h4>
        <p>{capital}</p>
        <h4>Language:</h4>
        <p>{languages[0].name}</p>
        <h4>Population:</h4>
        <p>{population}</p>
        <h4>Currency:</h4>
        <p>
          {currencies[0].name} ({currencies[0].symbol})
        </p>
        <h4>Size:</h4>
        <p>
          {area} Km<sup>2</sup>
        </p>
        <h4>Timezone(s):</h4>
        <p>{timezones}</p>
        <h4>Call Code:</h4>
        <p>+{callingCodes}</p>
        <i onClick={props.closeModal} className="fas back fa-2x fa-arrow-circle-left"></i>
      </div>
      <div className="flag-single">
        <img src={flag} alt={`${name}'s flag`} />
      </div>
      <div className="map" style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: 'STRING' }} defaultCenter={center} defaultZoom={5}>
          <Marker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default SingleFlagItem;
