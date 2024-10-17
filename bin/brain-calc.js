import { question } from "readline-sync";

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error("Unknown operator");
  }
};

const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const startCalculatorGame = () => {
  console.log("What is the result of the expression?");

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operator = getRandomOperator();

    const questionStr = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator);
    const userAnswer = question(`Question: ${questionStr}\nYour answer: `);

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again!`);
      return;
    }
  }

  console.log("Congratulations, you win!");
};

export default startCalculatorGame;
