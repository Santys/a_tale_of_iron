// Init canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');



const game = () => {
    clearCanvas();
    drawBackground();
    drawHero();
}

const clearCanvas = () => {
    ctx.clearRect(0, 0, 700, 300);
}

const drawBackground = () => {
    ctx.fillStyle = 'tan'
    ctx.fillRect(0, 200, 700, 100);
    ctx.fillStyle = 'skyblue'
    ctx.fillRect(0, 0, 700, 200);
}

const drawHero = () => {
    ctx.fillStyle = 'blue'
    ctx.fillRect(50, 150, 50, 100);
}