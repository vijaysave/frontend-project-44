import { runGame } from "/src/engine.js";

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameLogic = () => {
  const num = Math.floor(Math.random() * 100);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? "yes" : "no";
  return { question, correctAnswer };
};

const playPrimeGame = () => runGame(gameLogic);

export default playPrimeGame;
