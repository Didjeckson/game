'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
    let gameNumber = Math.floor(Math.random() * 100);
    if (gameNumber === 0) {
        game();
    }
    console.log('Random number: ' + gameNumber);
    let userNumber = prompt('Угадай число от 1 до 100');

    function gameMechanic(gamerSolution) {

        if (userNumber === null) {
            return 0;
        }

        if (gameNumber === userNumber) {
            return 1;
        }

        if (!isNumber(userNumber)) {
            userNumber = prompt('Введи число!');
            gameMechanic(userNumber);
        } else if (userNumber < gameNumber) {
            userNumber = prompt('Загаданное число больше');
            gameMechanic(userNumber);
        } else if (userNumber > gameNumber) {
            userNumber = prompt('Загаданное число меньше');
            gameMechanic(userNumber);
        }

    }

    if (!gameMechanic(userNumber)) {
        alert('You won the game!');
    } else {
        alert('game over');
    }


}

game();