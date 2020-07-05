import React from 'react';

const Heading = (props) => {
  return (
    <header>
      <div onClick={() => props.closeModal()} className="title">
        <i className="title-flag-img far fa-4x fa-flag"></i>
        <h1 className="main-title">Uniting Nations</h1>
      </div>
    </header>
  );
};

export default Heading;
