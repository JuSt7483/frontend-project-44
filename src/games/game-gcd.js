import getRandomInt from "../randomNum.js";
import { getAnswerForQuestion } from "../cli.js";
import getGcd from "../getGcd.js";

export default (rules) => {
  function next() {
    const num1 = getRandomInt(99);
    const num2 = getRandomInt(99);
    const rightAnswer = getGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = getAnswerForQuestion("Your answer: ");

    rules.check({ answer, rightAnswer }, next);
  }

  return {
    start() {
      console.log("Find the greatest common divisor of given numbers.");
      next();
    },
  };
};
