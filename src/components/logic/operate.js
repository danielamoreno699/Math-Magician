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
    const num = parseFloat(newScreenValue);
    const result = calc.operator ? operate(calc.operator, calc.result, num) : num;
    setCalc({
      ...calc,
      result,
      num,
      screenValue: newScreenValue,
    });
    console.log(`Number ${value} was clicked`);
    console.log('numClick', result, num);
  };
  
  export const signClickHandler = (operator, calc, setCalc) => {
    console.log(`Sign ${operator} was clicked`);
    const newScreenValue = calc.screenValue + operator;
    let result = calc.result;
    if (calc.operator && calc.num !== 0) {
      result = operate(calc.operator, calc.result, calc.num);
      setCalc({
        ...calc,
        operator,
        num: 0,
        result,
        screenValue: newScreenValue,
      });
    } else {
      setCalc({
        ...calc,
        operator,
        screenValue: newScreenValue,
      });
    }
    console.log('signClick', result, calc.num);
  };
  

  

  
  export const equalClickHandler = (calc, setCalc) => {
    console.log(`Equal was clicked`);
    let result;
    if (calc.operator) {
      result = operate(calc.operator, calc.result, calc.num);
    } else {
      result = calc.result;
    }
    setCalc({
      ...calc, 
      result,
      screenValue: result.toString(),
    });
    console.log('equal', result);
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