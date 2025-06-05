// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");

// document.addEventListener("keydown", function(event){
//     jump()
// });

// function jump() {
//     if(dino.classList !="jump") {
//         dino.classList.add("jump");
//     }
//     setTimeout(function() {
//         dino.classList.remove("jump");
//     }, 300);
// }

// let isAlite = setInterval (function(){
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//         alert("GAME OVER!!")
//     }
// }, 10)

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let isAlive = null;

// Прыжок по клавише
document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

// Функция запуска игры
function startGame() {
    cactus.style.animationPlayState = "running";

    isAlive = setInterval(function(){
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            alert("GAME OVER!!");
            stopGame(); // Останавливаем игру при проигрыше
        }
    }, 10);
}

// Функция остановки игры
function stopGame() {
    cactus.style.animationPlayState = "paused";
    clearInterval(isAlive);
    isAlive = null;
}

// Назначаем кнопкам действия
startBtn.onclick = startGame;
stopBtn.onclick = stopGame;

// Изначально игра на паузе
window.onload = () => {
    cactus.style.animationPlayState = "paused";
};