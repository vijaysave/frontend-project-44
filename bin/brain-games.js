
import { question } from "readline-sync";  
import greetUser from "../src/cli.js";  
import playGame from "./brain-even.js";  
import startCalculatorGame from "./brain-calc.js";  
import startGcdGame from "./brain-gcd.js";  
import startArithmeticProgression from "./brain-progression.js";  
import playPrimeGame from "./brain-prime.js";

const main = () => {  
  console.log("Welcome to the Brain Games!");  

  const userName = greetUser(); 

  const gameChoice = question(  
    "",  ///"Choose a game (brain-even, brain-calc, brain-gcd, brain-progression): "
  );  

  if (gameChoice === "brain-even") {  
    playGame(userName); 
  } else if (gameChoice === "brain-calc") {  
    startCalculatorGame(userName);  
  } else if (gameChoice === "brain-gcd") {  
    startGcdGame(userName);  
  } else if (gameChoice === "brain-progression") {  
    startArithmeticProgression(userName);   
  } else if (gameChoice === "brain-prime") {  
  playPrimeGame(userName);   
}  
};  

main();