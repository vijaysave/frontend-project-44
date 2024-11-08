import { question } from "readline-sync";

const greetUser = () => {  
  const name = question("May I have your name? ");  
  console.log(`Hello, ${name}!`);  
  return name;  
}; 

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

const playGame = () => {
  const username = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = getRandomNumber();
    const answer = question(`Question: ${number}\nYour answer: `).toLowerCase();
    const correctAnswer = isEven(number) ? "yes" : "no";

    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `Wrong! The correct answer was '${correctAnswer}'. Let's try again!`,
      );
      return; // Выход из игры при неправильном ответе
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default playGame;
