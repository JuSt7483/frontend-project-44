export default () => {
  const fail = 0;
  const success = 3;
  let counterCorrect = 0;
  let counterIncorrect = 0;
  let userName = null;

  function reset() {
    counterCorrect = 0;
    counterIncorrect = 0;
  }

  function finishGameWin() {
    console.log(`Congratulations, ${userName}!`);
    reset();
  }

  function finishGameLoose() {
    console.log(`Let's try again, ${userName}!`);
    reset();
  }

  function check({ answer, rightAnswer }, next) {
    if (answer === rightAnswer.toString()) {
      console.log("Correct!");
      counterCorrect += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      counterIncorrect += 1;
    }

    if (counterIncorrect > fail) {
      finishGameLoose();
    } else if (counterCorrect >= success) {
      finishGameWin();
    } else {
      next();
    }
  }

  return {
    userName,

    setUserName(name) {
      userName = name;
    },

    check({ answer, rightAnswer }, next) {
      check({ answer, rightAnswer }, next);
    },

    reset() {
      reset();
    },
  };
};
