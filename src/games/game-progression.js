import getRandomInt from '../randomNum.js';
import { getAnswerForQuestion } from '../cli.js';

export default (rules) => {
  function createArray(first, count, length) {
    const arr = [];

    arr[0] = first;

    for (let i = 1; i <= length; i++) {
      arr[i] = arr[i - 1] + count;
    }

    return arr;
  }

  function hideNumByIndex(progression, index) {
    const p = [...progression];
    p[index] = "..";
    return p;
  }

  function next() {
    const lengthArray = getRandomInt(5) + 5;
	const progressionStep = getRandomInt(5) + 1;
	const seedNumber = getRandomInt(10);
    const progression = createArray(seedNumber, progressionStep, lengthArray);
    const rightAnswerIndex = getRandomInt(lengthArray - 1);
    const rightAnswer = progression[rightAnswerIndex];
    const newProgression = hideNumByIndex(progression, rightAnswerIndex).join(" ");
    console.log(`Question: ${newProgression}`);
    const answer = getAnswerForQuestion("Your answer: ");

    rules.check({ answer, rightAnswer }, next);
  }

  return {
		start() {
			console.log('What number is missing in the progression?');
			next();
		},
	};
};
