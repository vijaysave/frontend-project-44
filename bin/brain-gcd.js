#!/usr/bin/env node  
import { question } from "readline-sync";  



const gcd = (a, b) => {  
  while (b) {  
    const temp = b;  
    b = a % b;  
    a = temp;  
  }  
  return a;  
};  

const startGcdGame = (userName) => {  
    
  console.log("Find the greatest common divisor of given numbers.");  

  for (let i = 0; i < 3; i++) {  
    const num1 = Math.floor(Math.random() * 100) + 1; 
    const num2 = Math.floor(Math.random() * 100) + 1; 
    const correctAnswer = gcd(num1, num2);  
    
    const userAnswer = parseInt(question(`Question: ${num1} ${num2}\nYour answer: `), 10);  

    if (userAnswer === correctAnswer) {  
      console.log("Correct!");  
    } else {  
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);  
      console.log(`Let's try again, ${userName}!`);  
      return;  
    }  
  }  
  
  console.log(`Congratulations, ${userName}!`);  
};  

export default startGcdGame;