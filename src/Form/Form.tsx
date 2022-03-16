import React from 'react';
import Cards from './Cards';

import './Form.scss';
const Form = () => {
  return (
    <div className="form-wrapper">
      <h1 className="heading">Weclome Text...</h1>
      <h4 className="sub-heading">SubHeading</h4>
      <div className="form-content"></div>
      <div className="submit-wrapper">
        <button className="submit">Create WorkSapce</button>
      </div>
    </div>
  );
};

export default Form;
