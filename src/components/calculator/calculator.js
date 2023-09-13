import CalcComponents from './children';

const Calculator = () => (
  <div className="mt-5">
    <div className="container">
      <div className="container-calc">
        {/* <div className="col">
          <h2 className="calculator-text">Let&apos;s do some math</h2>
        </div> */}
        <div className="calc-w">
          <CalcComponents />
        </div>

      </div>

    </div>

  </div>

);
export default Calculator;
