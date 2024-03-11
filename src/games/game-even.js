import readlineSync from "readline-sync";

export default () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const randomNumber = getRandomInt(99);
    function getRightAnswer() {
        let result = "";
        if (randomNumber % 2 === 1) {
          result = "no";
        } else {
          result = "yes";
        }
        return result;
      }
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    const rightAnswer = getRightAnswer();
    if (answer === rightAnswer.toString()) {
      console.log("Correct!");
      i++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
