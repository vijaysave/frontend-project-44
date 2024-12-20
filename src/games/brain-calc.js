import { runGame } from "../engine.js";
import { getRandomInt } from "../randomUtils.js";

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
  const randomIndex = getRandomInt(0, operators.length - 1); 
  return operators[randomIndex];
};

const generateGameQuestion = () => {
  const first_number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const two_number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = getRandomOperator();

  const question = `${first_number} ${operator} ${two_number}`;
  const correctAnswer = calculate(first_number, two_number, operator);
  return { question, correctAnswer };
};

const startCalculatorGame = () => {
  const instructions = 'What is the result of the expression?';
  runGame(generateGameQuestion, instructions);
};

export default startCalculatorGame;