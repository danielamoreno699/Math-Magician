import CalcComponents from './children';


const Calculator = ({ value }) => (
  <div>
    <h1>Calculator</h1>
    <CalcComponents value={value} />
  </div>

);
export default Calculator;
