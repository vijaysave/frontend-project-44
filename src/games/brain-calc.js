import { runGame } from "/src/engine.js";

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

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const gameLogic = () => {
  const first_number = getRandomInt(1, 100);
  const two_number = getRandomInt(1, 100);
  const operator = getRandomOperator();

  const question = `${first_number} ${operator} ${two_number}`;
  const correctAnswer = calculate(first_number, two_number, operator);
  return { question, correctAnswer };
};

const startCalculatorGame = () => runGame(gameLogic);

export default startCalculatorGame;
