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
  let newScreenValue = calc.screenValue;
  if (newScreenValue === '0') {
    newScreenValue = '';
  }
  newScreenValue += value.toString();
  const num = parseFloat(newScreenValue);

  setCalc({
    ...calc,
    operand2: num,
    screenValue: newScreenValue,
  });
};

export const signClickHandler = (operator, calc, setCalc) => {
  if (calc.operator) {
    const result = operate(calc.operator, parseFloat(calc.operand1), parseFloat(calc.operand2));
    setCalc({
      ...calc,
      operand1: result,
      operand2: null,
      result,
      operator,
      screenValue: result.toString(),
    });
  } else {
    setCalc({
      ...calc,
      operator,
      operand1: parseFloat(calc.screenValue),
      screenValue: '',
    });
  }
};

export const equalClickHandler = (calc, setCalc) => {
  let { result } = calc;
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
};

export const resetClickHandler = (calc, setCalc) => {
  setCalc({
    screenValue: '0',
    result: null,
    operand1: null,
    operand2: null,
    operator: null,
  });
};

export const percentClickHandler = (value, calc, setCalc) => {
  const num = parseFloat(calc.screenValue);
  const percent = operate('/', num, 100);
  const result = operate(calc.operator, parseFloat(calc.operand1), percent);
  setCalc({
    ...calc,
    operand2: percent,
    screenValue: percent.toString(),
    result,
  });
};

export const commaClickHandler = (value, calc, setCalc) => {
  const num = parseFloat(calc.screenValue);

  if (typeof num === 'number') {
    setCalc({
      ...calc,
      screenValue: `${num.toLocaleString('en-US', { maximumFractionDigits: 10 })}.`,
      operand2: calc.operator ? num : parseFloat(calc.operand2),
      operand1: calc.operator ? parseFloat(calc.operand1) : parseFloat(calc.screenValue),
      result: calc.operator ? operate(calc.operator, parseFloat(calc.operand1), num) : calc.result,
    });
  }
};

export const invertClickHandler = (value, calc, setCalc) => {
  const num = parseFloat(calc.screenValue);

  const newNum = -num;

  setCalc({
    ...calc,
    screenValue: newNum.toString(),
    operand1: calc.operator ? parseFloat(calc.operand1) : newNum,
    operand2: calc.operator ? newNum : parseFloat(calc.operand2),
    result: calc.operator ? operate(calc.operator, parseFloat(calc.operand1), newNum) : calc.result,
  });
};
