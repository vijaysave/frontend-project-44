import { runGame } from "../src/engine.js";

const gcd = (a, b) => {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gameLogic = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return { question, correctAnswer };
};

const startGcdGame = () => runGame(gameLogic);

export default startGcdGame;
