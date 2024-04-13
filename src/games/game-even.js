import getRandomInt from "../randomNum.js";
import { getAnswerForQuestion } from "../cli.js";

export default (rules) => {
  function next() {
    const randomNumber = getRandomInt(99);
    const rightAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const answer = getAnswerForQuestion("Your answer: ");

		rules.check({ answer, rightAnswer }, next);
	}

	return {
		start() {
			console.log('Answer "yes" if the number is even, otherwise answer "no".');
			next();
		},
	}
}
