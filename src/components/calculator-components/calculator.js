import PropTypes from 'prop-types';
import CalcComponents from './children';

const Calculator = ({ value }) => (
  <div>
    
    <CalcComponents value={value} />
  </div>

);
export default Calculator;

Calculator.propTypes = {
  value: PropTypes.string.isRequired,
};
