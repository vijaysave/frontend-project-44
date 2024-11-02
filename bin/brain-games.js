#!/usr/bin/env node
import { question } from "readline-sync";
import greetUser from "../src/cli.js";
import playGame from "./brain-even.js";
import startCalculatorGame from "./brain-calc.js";
import startGcdGame from "./brain-gcd.js"
import startArithmeticProgression from "./brain-progression.js";

const main = () => {
  console.log("Welcome to the Brain Games!");

  greetUser(); 

  const gameChoice = question(
    " ",
  );

  if (gameChoice === "brain-even") {
    playGame(); // Запуск игры "Четное или нечетное число"
  } else if (gameChoice === "brain-calc") {
    startCalculatorGame(); // Запуск игры "Калькулятор"
  } else if (gameChoice === "brain-gcd") {  
    startGcdGame(); // Запуск игры "наибольший общий делитель"  
  } else if (gameChoice === "brain-progression") {  
    startArithmeticProgression();
  }  else {  
    console.log("Invalid choice! Please select  a valid game.");  
  }  
};

main();
greetUser();
playGame();
