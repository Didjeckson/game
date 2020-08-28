'use strict';

function game() {
    let gameNumber = Math.floor(Math.random() * 100);
    if (gameNumber === 0) {
        game();
    }
    console.log('Random number: ' + gameNumber);
    let userNumber = prompt('Угадай число от 1 до 100');

    function gameMechanic(gamerSolution) {

        if (userNumber === isNaN) {
            userNumber = prompt('Введи число!');
        }

        if (userNumber < gameNumber) {
            userNumber = prompt('Загаданное число больше');
        } else if (userNumber > gameNumber) {
            userNumber = prompt('Загаданное число меньше');
        }

        if (userNumber === false) {
            alert('game over');
        }

        if (userNumber !== gameNumber) {
            gameMechanic(userNumber);
        }

    }

    gameMechanic(userNumber);
}

game();