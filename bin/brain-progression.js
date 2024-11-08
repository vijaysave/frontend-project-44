

import { question } from 'readline-sync';  

const startArithmeticProgression = (userName) => {  
  const rounds = 3; // Количество вопросов  
  console.log("What number is missing in the progression?");  

  for (let i = 0; i < rounds; i++) {  
    const length = getRandomInt(5, 10);  
    const progressionData = generateProgression(length);  
    const { progression, hiddenValue } = progressionData;  

    console.log("Question:", progression.join(" "));  
    const answer = question("Your answer: ");  

    if (parseInt(answer, 10) === hiddenValue) {  
      console.log("Correct!");  
    } else {  
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);  
      console.log(`Let's try again, ${userName}!`);  
      return; // Завершить игру при неверном ответе  
    }  
  }  

  console.log(`Congratulations, ${userName}!`); // Поздравление при успешном завершении игры  
};  

// Генерация арифметической прогрессии  
const generateProgression = (length) => {  
  const start = getRandomInt(1, 10);  
  const step = getRandomInt(1, 10);  
  const progression = Array.from({ length }, (_, i) => start + i * step);  
  const hiddenIndex = getRandomInt(0, length - 1);  
  const hiddenValue = progression[hiddenIndex];  
  progression[hiddenIndex] = '..'; // Заменяем скрытое число на '..'  
  return { progression, hiddenValue };  
};  

// Генерация случайного целого числа в заданном диапазоне  
const getRandomInt = (min, max) => {  
  return Math.floor(Math.random() * (max - min + 1)) + min;  
};  

export default startArithmeticProgression;