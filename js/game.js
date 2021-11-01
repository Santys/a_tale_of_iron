// Init canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

//  Characters
const hero = new Hero();
const enemy = new Enemy();

// Flags 
let skillPicked = false;
let victory = false;
let defeat = false;

// Variables
let skillNumber = 0;



const game = () => {
    clearCanvas();
    if(victory){
        displayVictory();
    } else if (defeat){
        displayDefeat();
    } else {
        drawBackground();
        displayCombat();
        combat()
        hero.draw();
        enemy.move();
        enemy.draw();
    }
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

const combat = () => {
    if(enemy.x === 600 && skillPicked) {
        const enemySkill = enemy.selectSkill();
        const heroSkill = hero.selectSkill(skillNumber);
        const result = battleResult(heroSkill, enemySkill);
        victory = enemy.defeated();
        defeat = hero.defeated();
        skillPicked = false;
        console.log(heroSkill);
        console.log(enemySkill);
        console.log(result)
    }
}

const playerSkill = (skill) => {
    if(skill === 'ArrowRight') {
        skillPicked = true
        skillNumber = 0
    } else if(skill === 'ArrowLeft') {
        skillPicked = true
        skillNumber = 1
    } else if(skill === 'ArrowUp') {
        skillPicked = true
        skillNumber = 2
    }
}

/**
 * Reduces the life of the hero or the enemy depending on 
 * the outcome of the combat.
 * 
 * @param {string} heroSkill The skill of the hero.
 * @param {string} enemySkill The skill of the enemy.
 * @return {boolean} True when skills are different and false if they are the same
 */
const battleResult = (heroSkill, enemySkill) => {
    if(heroSkill === enemySkill) return false;

    if(heroSkill === 'attack'){
        if(enemySkill === 'mock') {
            enemy.life -= 1;
            return true;
        } else if (enemySkill === 'defend'){
            hero.life -= 1;
            return true;
        }
    } else if(heroSkill === 'defend'){
        if(enemySkill === 'attack') {
            enemy.life -= 1;
            return true;
        } else if (enemySkill === 'mock'){
            hero.life -= 1;
            return true;
        }
    } else if(heroSkill === 'mock') {
        if(enemySkill === 'defend') {
            enemy.life -= 1;
            return true;
        } else if (enemySkill === 'attack'){
            hero.life -= 1;
            return true;
        }
    }
}

const displayVictory = () => {
    ctx.fillStyle = 'DarkSeaGreen'
    ctx.fillRect(0, 0, 700, 300);
    ctx.fillStyle = "Gold";
    ctx.textAlign = "center";
    ctx.font = "70px serif";
    ctx.fillText("VICTORY", 350, 150);
}

const displayDefeat = () => {
    ctx.fillStyle = 'SaddleBrown'
    ctx.fillRect(0, 0, 700, 300);
    ctx.fillStyle = "Gold";
    ctx.textAlign = "center";
    ctx.font = "70px serif";
    ctx.fillText("DEFEAT", 350, 150);
}

const displayCombat = () => {
    ctx.fillStyle = 'white'
    ctx.font = "30px serif";
    ctx.fillText(`Lives: ${hero.life}`, 50, 50);

    if(enemy.x === 600) {
        ctx.fillStyle = 'green'
        ctx.beginPath();
        ctx.moveTo(350,100);
        ctx.lineTo(400,190);
        ctx.lineTo(300,190);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'white'
        ctx.font = "30px serif";
        ctx.fillText(`Lives: ${enemy.life}`, 550, 50);
        ctx.font = "15px serif";
        ctx.fillText('ATTACK', 320, 85);
        ctx.fillText('MOCK', 405, 190);
        ctx.fillText('DEFEND', 240, 190);
    }
}