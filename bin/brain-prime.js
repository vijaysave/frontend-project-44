// brain-prime.js  

import { question } from "readline-sync";  

const isPrime = (num) => {  
  if (num <= 1) return false;  
  for (let i = 2; i <= Math.sqrt(num); i++) {  
    if (num % i === 0) return false;  
  }  
  return true;  
};  

const playPrimeGame = (userName) => {  
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');  
  
  for (let i = 0; i < 3; i++) {  
    const num = Math.floor(Math.random() * 100); 
    const correctAnswer = isPrime(num) ? "yes" : "no";  
    console.log(`Question: ${num}`);  
    
    const userAnswer = question('Your answer: ');  
    
    if (userAnswer === correctAnswer) {  
      console.log('Correct!');  
    } else {  
      console.log(`Wrong! Correct answer was "${correctAnswer}".`);  
      console.log(`Let's try again, ${userName}!`);  
      return;  
    }  
  }  
  console.log(`Congratulations, ${userName}!`);  
};  

export default playPrimeGame;