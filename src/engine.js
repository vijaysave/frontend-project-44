import readlineSync from "readline-sync";

const greetUser = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
};

const runGame = ( generateGameQuestion, instructions) => {
  const userName = greetUser();

  if (instructions) {
    console.log(instructions);
  }

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } =  generateGameQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

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