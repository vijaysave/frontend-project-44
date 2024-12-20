import { question } from "readline-sync";

const greetUser = () => {
  console.log('Welcome to the Brain Games!'); 
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default greetUser;