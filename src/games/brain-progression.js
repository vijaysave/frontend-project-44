import { runGame } from '../engine.js';
import { getRandomInt } from '../randomUtils.js';

const MIN_START = 1;
const MAX_START = 10;
const MIN_STEP = 1;
const MAX_STEP = 10;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateGameQuestion = () => {
 
  const length = getRandomInt(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomInt(MIN_START, MAX_START);
  const step = getRandomInt(MIN_STEP, MAX_STEP);

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1); 
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = String(hiddenValue);

  return { question, correctAnswer };
};

const startArithmeticProgression = () => {
  const instructions = 'What number is missing in the progression?';
  runGame(generateGameQuestion, instructions);
};
export default startArithmeticProgression;
