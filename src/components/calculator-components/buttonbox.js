/* eslint-disable react/no-array-index-key */
import React from 'react';

const btnValues = [
  'AC', '+/-', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

const ButtonBox = () => (
  <div className="btn-box">
    {btnValues.map((value, i) => (

      <button type="button" className="btn-number" key={i}>{value}</button>

    ))}
  </div>
);

export default ButtonBox;
