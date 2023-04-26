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
    console.log(`Number ${value} was clicked`);
  };
  
  export const signClickHandler = (operator, calc, setCalc) => {
    console.log(`Sign ${operator} was clicked`); 
  };
  
  export const percentClickHandler = (value, calc, setCalc) => {
    console.log(`Percent ${value} was clicked`);

  };
  
  export const equalClickHandler = (calc, setCalc, operate) => {
    console.log(`Equal was clicked`);

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
  