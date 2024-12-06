import { runGame } from "../src/engine.js";

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
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
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return { question, correctAnswer };
};

const startCalculatorGame = () => runGame(gameLogic);

export default startCalculatorGame;
