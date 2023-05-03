import React, { useState } from 'react';
import calculate from '../logic/caculate';

const CalcComponents = () => {
  const btnValues = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const [calc, setCalculator] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    setCalculator((prevState) => {
      const newResult = calculate(prevState, buttonName.target.textContent);
      return { ...prevState, ...newResult };
    });
  };

  return (
    <div className="wrapper">
      <div className="screen">
        {calc.total}
        {calc.operation}
        {calc.next}
      </div>
      <div className="btn-box">
        {btnValues.map((value) => (
          <button type="button" className="btn-number" key={value} onClick={handleButtonClick}>{value}</button>
        ))}
      </div>
    </div>
  );
};

export default CalcComponents;