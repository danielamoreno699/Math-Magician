import React, { useState } from 'react';
import ButtonBox from '../calculator-components/buttonbox';
import Screen from '../calculator-components/screen';
import { operate } from '../logic/operate';

const Calculator = () => {
  
  const [calc, setCalc] = useState({
    operator: '',
    num: 0,
    result: 0,
    screenValue: '',
  });

    return (
      <div className="wrapper">
        <Screen  value={calc.screenValue}/>
        <ButtonBox  calc={calc} setCalc={setCalc} operate={operate}/>
      </div>
    );
  }
export default Calculator;
