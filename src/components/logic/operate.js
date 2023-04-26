
import  { useState } from 'react';
import React from 'react'

function App() {
	const [calc, setCalc] = useState({
        operator : "",
        num: 0,
        result: 0
    });
	
}

const operate = (op, num1, num2) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return null;
    }
}

export const handleClick = (value) => {
    console.log(`Button ${value} was clicked`);
  };

export const numClickHandler = (value) => {
    console.log(`Number ${value} was clicked`);
}

export const signClickHandler = (value) => {
    console.log(`sign was clicked ${value}`);
}

export const percentClickHandler = (value) => {
    console.log(`percent ${value} was clicked`);
}

export const equalClickHandler = (value) => {
    console.log(`equal ${value} was clicked`);
}

export const commaClickHandler = (value) => {
    console.log(` ${value} was clicked`);
}

export const invertClickHandler = (value) => {
    console.log(`c ${value} was clicked`);
}

export const resetClickHandler = (value) => {
    console.log(`AC ${value} was clicked`);
}
