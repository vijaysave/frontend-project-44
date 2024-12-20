import runGame from '../engine.js';
import getRandomInt from '../randomUtils.js';

const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const generateGameQuestion = () => {
  const number = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playGame = () => {
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(generateGameQuestion, instructions);
};

export default playGame;
