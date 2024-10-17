#!/usr/bin/env node
import { question } from "readline-sync";
import greetUser from "../src/cli.js";
import playGame from "./brain-even.js";
import startCalculatorGame from "./brain-calc.js";
import startGcdGame from "./brain-gcd.js"


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
  } else {
    console.log("Invalid choice! Please select 1 or 2.");
  }
};

main();
greetUser();
playGame();
