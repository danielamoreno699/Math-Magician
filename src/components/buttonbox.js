import React from 'react';
import { ButtonNumber } from './button';

const btnValues = [
  'AC', '+/-', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

const ButtonBox = () => (
  <div className="btn-box">
    {btnValues.map((id, value) => (
      <ButtonNumber key={id} value={value} />
    ))}
  </div>
);

export default ButtonBox;
