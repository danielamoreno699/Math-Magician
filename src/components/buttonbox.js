import React from 'react';
import ButtonNumber from './button';

const btnValues = [
  'AC', '+/-', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

const ButtonBox = () => {
  return (
    <div className="btn-box">
      {btnValues.map((value, Index) => (
            <ButtonNumber key={`${Index}`} value={value} />
      ))}
    </div>
  );
};

export default ButtonBox;
