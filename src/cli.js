import { question } from "readline-sync";  

const greetUser = () => {  
  const userName = question("May I have your name? ");  
  console.log(`Hello, ${userName}!`);  
  return userName;  
}; 
export default greetUser;  