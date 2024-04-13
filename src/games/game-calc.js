import getRandomInt from "../randomNum.js";
import { getAnswerForQuestion } from "../cli.js";

export default (rules) => {
  const operations = ["+", "-", "*"];

  function randomOperation() {
    return operations[getRandomInt(2)];
  }

  function next() {
    const num1 = getRandomInt(99);
    const num2 = getRandomInt(99);
    const operation = randomOperation();
    const randomExpression = `${num1} ${operation} ${num2}`;
    const rightAnswer = eval(randomExpression);
    console.log(`Question: ${randomExpression}`);
    const answer = getAnswerForQuestion("Your answer:");

    rules.check({ answer, rightAnswer }, next);
  }

  return {
    start() {
      console.log('What is the result of the expression?');
      next();
    },
  };
};
