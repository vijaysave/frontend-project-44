#!/usr/bin/env node

import greetUser from '../src/cli.js';  
import playGame from './brain-even.js'; 

console.log('Welcome to the Brain Games!'); 

greetUser();
playGame();