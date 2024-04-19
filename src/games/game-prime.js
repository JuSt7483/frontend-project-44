import getRandomInt from '../randomNum.js';
import { getAnswerForQuestion } from '../cli.js';
import isPrime from '../checkingForPrimeNumber.js';

export default (rules) => {
  function next() {
    const num = getRandomInt(29) + 2;
    const rightAnswer = isPrime(num) ? "yes" : "no";
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion("Your answer:");

    rules.check({ rightAnswer, answer }, next);
  }

  return {
    start() {
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      next();
    },
  };
};
