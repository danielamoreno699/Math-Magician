/* eslint-disable react/no-array-index-key */
import React from 'react';
import { handleClick, numClickHandler, signClickHandler, percentClickHandler, equalClickHandler, invertClickHandler, resetClickHandler, commaClickHandler } from '../logic/operate';

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

      <button 
        type="button" 
        className={`btn-number`} 
        key={i} 
        value= {value}
        onClick = {
          
          value === "AC"
          ? () => resetClickHandler(value)
          : value === "+-"
                  ? () => invertClickHandler(value)
                  : value === "%"
                  ? () => percentClickHandler(value)
                  : value === "="
                  ? () => equalClickHandler(value)
                  : value === "/" || value === "x" || value === "-" || value === "+"
                  ? () => signClickHandler(value)
                  : value === "."
                  ? () => commaClickHandler(value)
                  : () => numClickHandler(value)
                  
        }
        // onClick={() => handleClick(value)}
        >   {value}
        
      
        
        </button>


    ))}
  </div>
);

export default ButtonBox;
