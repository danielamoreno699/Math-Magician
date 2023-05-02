import PropTypes from 'prop-types';
import CalcComponents from './children';

const Calculator = ({ value }) => (
  <div className='mt-5'>
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col">
          <h2 className='calculator-text'>Let's do some math</h2>
        </div>
        <div className="col">
          <CalcComponents value={value} />
        </div>

      </div>

    </div>

  </div>

);
export default Calculator;

Calculator.propTypes = {
  value: PropTypes.string.isRequired,
};
