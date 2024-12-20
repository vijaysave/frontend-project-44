import { runGame } from '../engine.js';
import { getRandomInt } from '../randomUtils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    default:
      throw new Error('Unknown operator');
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operators.length - 1);
  return operators[randomIndex];
};

const generateGameQuestion = () => {
  const firstNumber = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator);
  return { question, correctAnswer };
};

const startCalculatorGame = () => {
  const instructions = 'What is the result of the expression?';
  runGame(generateGameQuestion, instructions);
};

export default startCalculatorGame;
