import { runGame } from "../src/engine.js";

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameLogic = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? "yes" : "no";
  return { question, correctAnswer };
};

const playGame = () => runGame(gameLogic);

export default playGame;
