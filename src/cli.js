import readlineSync from 'readline-sync';

export function sayHi () {
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

