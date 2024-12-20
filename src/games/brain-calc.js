import { runGame } from '../engine.js';
import { getRandomInt } from '../randomUtils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const calculate = (firstnumber, twonumber, operator) => {
  switch (operator) {
    case "+":
      return firstnumber + twonumber;
    case "-":
      return firstnumber - twonumber;
    case "*":
      return firstnumber * twonumber;
    default:
      throw new Error("Unknown operator");
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operators.length - 1);
  return operators[randomIndex];
};

const generateGameQuestion = () => {
  const firstnumber = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const twonumber = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = getRandomOperator();

  const question = `${firstnumber} ${operator} ${twonumber}`;
  const correctAnswer = calculate(firstnumber, twonumber, operator);
  return { question, correctAnswer };
};

const startCalculatorGame = () => {
  const instructions = 'What is the result of the expression?';
  runGame(generateGameQuestion, instructions);
};

export default startCalculatorGame;
