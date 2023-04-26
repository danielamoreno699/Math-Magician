import React, { useState } from 'react';
import {  numClickHandler, signClickHandler, percentClickHandler, equalClickHandler, invertClickHandler, resetClickHandler, commaClickHandler, operate } from '../logic/operate';

const btnValues = [
  'AC', '+/-', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

const ButtonBox = () => {
  const [calc, setCalc] = useState({
    operator: '',
    num: 0,
    result: 0,
  });

  const handleButtonClick = (value) => {
    if (typeof value === 'number') {
      numClickHandler(value, calc, setCalc);
    } else {
      switch (value) {
        case '+':
        case '-':
        case 'x':
        case '/':
          signClickHandler(value, calc, setCalc);
          break;
        case '=':
          equalClickHandler(calc, setCalc, operate);
          break;
        case '%':
          percentClickHandler(value, calc, setCalc);
          break;
        case '.':
          commaClickHandler(value, calc, setCalc);
          break;
        case '+/-':
          invertClickHandler(value, calc, setCalc);
          break;
        case 'AC':
          resetClickHandler(calc, setCalc, value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="btn-box">
      {btnValues.map((value, i) => (
        <button
          type="button"
          className={`btn-number`}
          key={i}
          value={value}
          onClick={() => handleButtonClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default ButtonBox;