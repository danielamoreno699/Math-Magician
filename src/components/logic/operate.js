import Calculator from "./calculator";

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
  
  
  export const handleClick = (value) => {
    console.log(`Button ${value} was clicked`);
  };
  
  export const numClickHandler = (value, calc, setCalc) => {
    console.log(`Number ${value} was clicked`);
    if (calc.operator) {
      setCalc({ ...calc, num: calc.num * 10 + value });
    } else {
      setCalc({ ...calc, result: calc.result * 10 + value });
    }
  };
  
  export const signClickHandler = (operator, calc, setCalc) => {
    console.log(`Sign ${operator} was clicked`);
    if (calc.operator && calc.num) {
      const result = operate(calc.operator, calc.result, calc.num);
      setCalc({ ...calc, result, num: 0, operator });
    } else {
      setCalc({ ...calc, operator });
    }
  };
  
  export const percentClickHandler = (value, calc, setCalc) => {
    console.log(`Percent ${value} was clicked`);
    // const result = calc.result / 100;
    // setCalc({ ...calc, result });
  };
  
  export const equalClickHandler = (calc, setCalc, operate) => {
    console.log(`Equal was clicked`);
    const { operator, num, result } = calc;
    if (!operator) return;
    const newResult = operate(operator, result, num);
    setCalc({ operator: '', num: 0, result: newResult });
  };
  
  export const commaClickHandler = (value, calc, setCalc) => {
    console.log(`Comma ${value} was clicked`);
    // if (calc.operator) {
    //   const numStr = calc.num.toString();
    //   if (!numStr.includes('.')) {
    //     setCalc({ ...calc, num: parseFloat(numStr + '.') });
    //   }
    // } else {
    //   const resultStr = calc.result.toString();
    //   if (!resultStr.includes('.')) {
    //     setCalc({ ...calc, result: parseFloat(resultStr + '.') });
    //   }
    // }
  };
  
  export const invertClickHandler = (value, calc, setCalc) => {
    console.log(`Invert ${value} was clicked`);
    // if (calc.operator && calc.num) {
    //   setCalc({ ...calc, num: -calc.num });
    // } else {
    //   setCalc({ ...calc, result: -calc.result });
    // }
  };
  
  export const resetClickHandler = (calc, setCalc, value) => {
    console.log(`Reset ${value} was clicked`);
    setCalc({ operator: '', num: 0, result: 0 });
  };
  