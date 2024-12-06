import { runGame } from "../src/engine.js";

const generateProgression = (length) => {
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = Array.from({ length }, (_, i) => start + i * step);
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenValue };
};

const gameLogic = () => {
  const length = Math.floor(Math.random() * 5) + 5;
  const { progression, hiddenValue } = generateProgression(length);
  const question = progression.join(" ");
  const correctAnswer = hiddenValue;
  return { question, correctAnswer };
};

const startArithmeticProgression = () => runGame(gameLogic);

export default startArithmeticProgression;
