import runGame from '../engine.js';
import getRandomInt from '../randomUtils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateGameQuestion = () => {
  const num = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playPrimeGame = () => {
  const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(generateGameQuestion, instructions);
};

export default playPrimeGame;
