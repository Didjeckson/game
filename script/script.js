'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
    let gameNumber = Math.floor(Math.random() * 100);
    console.log(gameNumber);
    if (gameNumber === 0) {
        game();
    }
    let lives = 10;
    console.log('Random number: ' + gameNumber);
    let userNumber = prompt('Угадай число от 1 до 100');
    // if (!userNumber) {
    //     alert('Спасибо за игру');
    //     return 3;
    // }

    // let value = gameMechanic(userNumber);

    function gameMechanic(gamerSolution) {

        if (lives <= 1 && lives >= 1) {
            if (confirm('Game over! Желаете ли сыграть ещё раз?') === false) {
                return 3;
            } else {
                game();
            }
        }

        if (userNumber === null) {
            return 3;
        }

        // if (userNumber === null) {
        //     return 0;
        // }

        if (gameNumber === userNumber) {
            return 1;
        }

        if (!isNumber(userNumber)) {

            userNumber = prompt('Введи число!');
            gameMechanic(userNumber);
            if (userNumber === null) {
                return 3;
            }

        } else if (userNumber < gameNumber) {
            lives--;
            userNumber = prompt('Загаданное число больше, осталось попыток ' + lives);
            // if (!userNumber) {
            //     alert('Спасибо за игру');
            //     return 3;
            // }
            gameMechanic(userNumber);
        } else if (userNumber > gameNumber) {
            lives--;
            userNumber = prompt('Загаданное число меньше, осталось попыток ' + lives);
            // if (!userNumber) {
            //     alert('Спасибо за игру');
            //     return 3;
            // }
            gameMechanic(userNumber);
        }

    }



    if (gameMechanic(userNumber) === 3) {
        alert('Спасибо за игру');
        return;
    } else if (!gameMechanic(userNumber)) {
        if (confirm('You won the game! Хотите сыграть ещё?')) {
            game();
        } else {
            alert('Спасибо за игру');
        }
    }


}

game();