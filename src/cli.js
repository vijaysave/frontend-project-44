import { question } from "readline-sync";  
import { runGame } from "./engine.js"; 
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
        runGame(playEvenGame); 
        break;  
      case "brain-calc":  
        runGame(startCalculatorGame);  
        break;  
      case "brain-gcd":  
        runGame(startGcdGame);  
        break;  
      case "brain-progression":  
        runGame(startArithmeticProgression);  
        break;  
      case "brain-prime":  
        runGame(playPrimeGame); 
        break;  
      default:  
        console.log("Invalid choice. Please try again.");  
    }  

    continuePlaying = question("Do you want to play again? (yes/no): ").toLowerCase() === "yes";  
  }  

  console.log("Thank you for playing!");  
};  

main();