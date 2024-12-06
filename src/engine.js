import readlineSync from "readline-sync";

const greetUser = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
};

const runGame = (gameLogic) => {
  const userName = greetUser();
  console.log("Welcome to the Brain Games!");

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

export { runGame, greetUser };
