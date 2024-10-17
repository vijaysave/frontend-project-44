#!/usr/bin/env node  
import { question } from "readline-sync";  

const greetUser = () => {  
  const name = question("May I have your name? ");  
  console.log(`Hello, ${name}!`);  
  return name;  
};  

const gcd = (a, b) => {  
  while (b) {  
    const temp = b;  
    b = a % b;  
    a = temp;  
  }  
  return a;  
};  

const startGcdGame = () => {  
  const username = greetUser();  
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
      console.log(`Let's try again, ${username}!`);  
      return;  
    }  
  }  
  
  console.log(`Congratulations, ${username}!`);  
};  

export default startGcdGame;