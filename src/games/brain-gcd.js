import { runGame } from "../engine.js";
import { getRandomInt } from "../randomUtils.js";

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const calculateGreatestCommonDivisor = (a, b) => {
  let x = a;
  let y = b;

  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const generateGameQuestion = () => {
  const first_number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const two_number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const question = `${first_number} ${two_number}`;
  const correctAnswer = calculateGreatestCommonDivisor(first_number, two_number);
  return { question, correctAnswer };
};

const startGcdGame = () => {
  const instructions = 'Find the greatest common divisor of given numbers.';
  runGame(generateGameQuestion, instructions);
};
export default startGcdGame;