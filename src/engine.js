import readlineSync from "readline-sync";  

const greetUser = () => {  
  const userName = readlineSync.question("May I have your name? ");  
  console.log(`Hello, ${userName}!`);  
  return userName;  
};  

const runGame = (gameLogic, instructions) => {  
  const userName = greetUser();  
  console.log("Welcome to the Brain Games!\n");  


  if (instructions) {  
    console.log(instructions);  
  }  

  console.log("You will be given 3 questions. Try to answer them correctly!\n");  

  for (let i = 0; i < 3; i++) {  
    const { question, correctAnswer } = gameLogic();  
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);  

    if (String(userAnswer) === String(correctAnswer)) {  
      console.log("Correct!");  
    } else {  
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);  
      console.log(`Let's try again, ${userName}!`);  
      return;  
    }  
  }  

  console.log(`Congratulations, ${userName}!`);  
};  

export { runGame };