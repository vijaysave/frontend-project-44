import { runGame } from "/src/engine.js";  


const generateProgression = (start, step, length) => {  
  const progression = Array.from({ length }, (_, i) => start + i * step);  
  const hiddenIndex = Math.floor(Math.random() * length);  
  const hiddenValue = progression[hiddenIndex];  
  progression[hiddenIndex] = '..';  
  return { progression, hiddenValue };  
};  


const gameLogic = () => {  
  const length = Math.floor(Math.random() * 5) + 5; 
  const start = Math.floor(Math.random() * 10) + 1; 
  const step = Math.floor(Math.random() * 10) + 1; 

  const { progression, hiddenValue } = generateProgression(start, step, length);  
  const question = progression.join(" ");  

  const correctAnswer = String(hiddenValue);  
  return { question, correctAnswer };  
};  


const startArithmeticProgression = () => runGame(gameLogic);  

// Экспортируем функцию запуска игры  
export default startArithmeticProgression;