#!/usr/bin/env node

import { question } from "readline-sync";
import startCalculatorGame from "../games/brain-calc.js";
import playEvenGame from "../games/brain-even.js";
import startGcdGame from "../games/brain-gcd.js";
import startArithmeticProgression from "../games/brain-progression.js";
import playPrimeGame from "../games/brain-prime.js";

const main = () => {
  console.log("Welcome to the Brain Games!");

  let continuePlaying = true;
  while (continuePlaying) {
    const gameChoice = question("Choose a game (brain-even, brain-calc, brain-gcd, brain-progression, brain-prime): ");

    switch (gameChoice) {
      case "brain-even":
        playEvenGame();
        break;
      case "brain-calc":
        startCalculatorGame();
        break;
      case "brain-gcd":
        startGcdGame();
        break;
      case "brain-progression":
        startArithmeticProgression();
        break;
      case "brain-prime":
        playPrimeGame();
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }

    continuePlaying = question("Do you want to play again? (yes/no): ").toLowerCase() === "yes";
  }

  console.log("Thank you for playing!");
};

main();
