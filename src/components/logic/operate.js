import Calculator from "./calculator";
import ButtonBox from "../calculator-components/buttonbox";

export const operate = (operator, operand1, operand2) => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case 'x':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return 0;
    }
  };

  
  export const numClickHandler = (value, calc, setCalc) => {
    const newScreenValue = calc.screenValue + value.toString();
    setCalc({
        ...calc,
        num: parseFloat(newScreenValue),
        screenValue: newScreenValue,
      });
    console.log(`Number ${value} was clicked`);
  };


export const signClickHandler = (operator, calc, setCalc) => {
    console.log(`Sign ${operator} was clicked`);
    const newScreenValue = calc.screenValue + operator;
    if (calc.operator && calc.num !== 0) {
      const result = operate(calc.operator, calc.result, calc.num);
      setCalc({
        operator,
        num: 0,
        result,
        screenValue: newScreenValue,
      });
    } else {
      setCalc({
        operator,
        num: calc.num,
        result: calc.result,
        screenValue: newScreenValue,
      });
    }
  };
  

  
  export const equalClickHandler = (calc, setCalc) => {
    console.log(`Equal was clicked`);
    const result = operate(calc.operator, calc.result, calc.num);
    setCalc({
        operator: '',
        num: 0,
        result,
        screenValue: result.toString(),
  });

  };
  
  export const commaClickHandler = (value, calc, setCalc) => {
    console.log(`Comma ${value} was clicked`);

  };
  
  export const invertClickHandler = (value, calc, setCalc) => {
    console.log(`Invert ${value} was clicked`);
 
  };
  
  export const resetClickHandler = (calc, setCalc, value) => {
    console.log(`Reset ${value} was clicked`);
   
  };
  
  export const percentClickHandler = (value, calc, setCalc) => {
    console.log(`Percent ${value} was clicked`);

  };