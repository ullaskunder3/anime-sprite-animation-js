const canvas = document.querySelector('#canvas_container')
const ctx = canvas.getContext('2d');

const spriteWidth = 319
const spriteHeight = 329

const CANVAS_WIDTH = canvas.width = 400
const CANVAS_HEIGHT = canvas.height = 400

const playerImg = new Image();
// console.log(playerImg);

playerImg.src = './img/sword.png';
let frameX = 0;
let frameY = 0;
let initFrame = 0;
const staggerFrame = 7;
// console.log(staggerFrame, initFrame);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(initFrame/staggerFrame) % 9;
    frameX = spriteWidth* position;

//     console.log(position);

    ctx.drawImage(playerImg, frameX, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    initFrame++;
    requestAnimationFrame(animate)
}
animate()
