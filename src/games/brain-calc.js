import { runGame } from "./engine.js";  

const MIN_RANDOM_NUMBER = 1;  
const MAX_RANDOM_NUMBER = 100;  

const calculate = (first_number, two_number, operator) => {  
  switch (operator) {  
    case "+":  
      return first_number + two_number;  
    case "-":  
      return first_number - two_number;  
    case "*":  
      return first_number * two_number;  
    default:  
      throw new Error("Unknown operator");  
  }  
};  

const getRandomOperator = () => {  
  const operators = ["+", "-", "*"];  
  return operators[Math.floor(Math.random() * operators.length)];  
};  

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;  

const generateGameQuestion = () => {  
  const first_number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);  
  const two_number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);  
  const operator = getRandomOperator();  

  const question = `${first_number} ${operator} ${two_number}`;  
  const correctAnswer = calculate(first_number, two_number, operator);  
  return { question, correctAnswer };  
};  

const startCalculatorGame = () => runGame(generateGameQuestion);  

export default startCalculatorGame;