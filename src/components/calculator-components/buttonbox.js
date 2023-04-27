/* eslint-disable react/no-array-index-key */

import PropTypes from 'prop-types';
import {
  numClickHandler,
  signClickHandler,
  percentClickHandler,
  equalClickHandler,
  invertClickHandler,
  resetClickHandler,
  commaClickHandler,
} from '../logic/operate';

const btnValues = [
  'AC', '+/-', '%', '/',
  7, 8, 9, 'x',
  4, 5, 6, '-',
  1, 2, 3, '+',
  0, '.', '=',
];

const ButtonBox = ({ calc, setCalc, operate }) => {
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
          className="btn-number"
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

ButtonBox.propTypes = {
  calc: PropTypes.number.isRequired,
  setCalc: PropTypes.func.isRequired,
  operate: PropTypes.string.isRequired,
};

export default ButtonBox;
