// Init canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const hero = new Hero();
const enemy = new Enemy();

const game = () => {
    clearCanvas();
    drawBackground();
    hero.draw();
    enemy.draw();
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

