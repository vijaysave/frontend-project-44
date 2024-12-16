import { runGame } from "/src/engine.js";

const gcd = (a, b) => {
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gameLogic = () => {
  const first_number = Math.floor(Math.random() * 100) + 1;
  const two_number = Math.floor(Math.random() * 100) + 1;
  const question = `${first_number} ${two_number}`;
  const correctAnswer = gcd(first_number, two_number);
  return { question, correctAnswer };
};

const startGcdGame = () => runGame(gameLogic);

export default startGcdGame;
