import Calculator from "./calculator";
import ButtonBox from "../calculator-components/buttonbox";

export const operate = (operator, operand1, operand2) => {
    console.log("operate:", operator, operand1, operand2);
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
    let newScreenValue = calc.screenValue;
    if (newScreenValue === "0") {
        newScreenValue = "";
    }
    newScreenValue += value.toString();
    const num = parseFloat(newScreenValue);
  
    setCalc({
        ...calc,
        operand2: num,
        screenValue: newScreenValue,
    });
    console.log(`Number ${value} was clicked`);
};

export const signClickHandler = (operator, calc, setCalc) => {
    console.log(`Sign ${operator} was clicked`);
    if(calc.operator) {
        const result = operate(calc.operator, parseFloat(calc.operand1), parseFloat(calc.operand2));
        setCalc({
            ...calc,
            operand1: result,
            operand2: null,
            result: result,
            operator: operator,
            screenValue: result.toString(),
        });
        console.log('signClick', result);
    } else {
        setCalc({
            ...calc,
            operator: operator,
            operand1: parseFloat(calc.screenValue),
            screenValue: "",
        });
    }
};

export const equalClickHandler = (calc, setCalc) => {
    console.log(`Equal was clicked`);
    let result = calc.result;
    if (calc.operator && calc.operand2 !== null) {
        result = operate(calc.operator, parseFloat(calc.operand1), parseFloat(calc.operand2));
    }
    setCalc({
        ...calc, 
        operator: '',
        operand1: 0,
        operand2: 0,
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
  setCalc({
    screenValue: "0",
    result: null,
    operand1: null,
    operand2: null,
    operator: null,
  });
};

export const percentClickHandler = (value, calc, setCalc) => {
    console.log(`Percent ${value} was clicked`);
    
    const num = parseFloat(calc.screenValue);
    const percent = operate('/', num, 100);
    const result = operate(calc.operator, parseFloat(calc.operand1), percent);
    setCalc({
        ...calc,
        operand2: percent,
        screenValue: percent.toString(),
        result: result,
      });
  };
  