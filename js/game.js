// Init canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Flags 
let skillPicked = false;
let victory = false;
let defeat = false;
let isMuted = true;

// Variables
let skillNumber = 0;
let enemyNumber = 0;
let enemySkill = '';
let heroSkill = '';
let result = '';





//  Characters
const background0 = new Background(0, 0);
const background1 = new Background(700, 0);
const hero = new Hero();
const enemyFirst = new Enemy(2, 0, ['attack', 'defend', 'mock', 'attack', 'attack', 'attack', 'attack']);
const enemySecond = new Enemy(2, 1, ['attack', 'defend', 'mock', 'defend', 'defend', 'defend', 'defend']);
const enemyThird = new Enemy(2, 2, ['attack', 'defend', 'mock', 'mock', 'mock', 'mock', 'mock']);
const boss = new Enemy(3, 3, ['attack', 'defend', 'mock']);
const enemyArray = [enemyFirst, enemySecond, enemyThird, boss];
let enemy = enemyArray[enemyNumber]
let deathEnemy;
const arrowsImage = new Image();
arrowsImage.src = "./img/arrow_key.png"


const game = () => {
    clearCanvas();
    if(victory){
        drawBackground();
        displayVictory();
    } else if (defeat){
        drawBackground();
        displayDefeat();
    } else {
        updateBackground();
        drawBackground();
        displayCombat();
        // enemyArray.forEach((item) => {
        //     item.move(); 
        //     item.draw();
        // })
        if(deathEnemy != undefined) deathEnemy.death();
        hero.draw();
        enemy.move();
        enemy.draw();       
        combat();
    }
}

const clearCanvas = () => {
    ctx.clearRect(0, 0, 700, 300);
}

const drawBackground = () => {
    // ctx.fillStyle = 'tan'
    // ctx.fillRect(0, 200, 700, 100);
    // ctx.fillStyle = 'skyblue'
    // ctx.fillRect(0, 0, 700, 200);
    background0.drawBackground();
    background1.drawBackground();
}

const updateBackground = () => {
    if(enemy.x > 700-enemy.width && enemy.speedX === -1){
        if (background0.x <= -700) {
            background0.x = 700;
        }
        if (background1.x <= -700) {
            background1.x = 700;
        }
        background0.x -= 1;
        background1.x -= 1;
    }
}

const combat = () => {
    if(enemy.x === 700-enemy.width && skillPicked) {
        enemySkill = enemy.selectSkill();
        heroSkill = hero.selectSkill(skillNumber);
        result = battleResult(heroSkill, enemySkill);
        if(enemy.defeated()) {
            deathEnemy = enemy;
            enemyNumber++
            heroSkill = '';
            enemySkill = '';
            result = '';
            // result = 'The enemy has been defeated'
        }
        if(enemyNumber > 3) victory = enemy.defeated()
        defeat = hero.defeated();
        skillPicked = false;
        console.log(heroSkill);
        console.log(enemySkill);
        console.log(result)
        enemy = enemyArray[enemyNumber]
    }
    
    ctx.fillStyle = 'white'
    ctx.font = "20px serif";
    ctx.textAlign = "center";
    ctx.fillText(`${heroSkill.toUpperCase()}`, 110, 150);
    ctx.fillText(`${enemySkill.toUpperCase()}`, 580, 150);
    ctx.fillText(`${result.toUpperCase()}`, 350, 250);
    
}

const playerSkill = (skill) => {
    if(enemy.x != 700-enemy.width) return false;
    if(skill === 'ArrowUp') {
        skillPicked = true
        skillNumber = 0
    } else if(skill === 'ArrowLeft') {
        skillPicked = true
        skillNumber = 1
    } else if(skill === 'ArrowRight') {
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
    if(heroSkill === enemySkill) return "Draw";

    if(heroSkill === 'attack'){
        if(enemySkill === 'mock') {
            enemy.life -= 1;
            return "The enemy has been injured";
        } else if (enemySkill === 'defend'){
            hero.life -= 1;
            return "You have been injured";
        }
    } else if(heroSkill === 'defend'){
        if(enemySkill === 'attack') {
            enemy.life -= 1;
            return "The enemy has been injured";
        } else if (enemySkill === 'mock'){
            hero.life -= 1;
            return "You have been injured";
        }
    } else if(heroSkill === 'mock') {
        if(enemySkill === 'defend') {
            enemy.life -= 1;
            return "The enemy has been injured";
        } else if (enemySkill === 'attack'){
            hero.life -= 1;
            return "You have been injured";
        }
    }
}

const displayVictory = () => {
    ctx.fillStyle = "Gold";
    ctx.textAlign = "center";
    ctx.font = "90px serif";
    ctx.fillText("VICTORY", 350, 150);
}

const displayDefeat = () => {
    ctx.fillStyle = "Gold";
    ctx.textAlign = "center";
    ctx.font = "90px serif";
    ctx.fillText("DEFEAT", 350, 150);
}

const displayCombat = () => {
    ctx.textAlign = "center";
    ctx.fillStyle = 'white'
    ctx.font = "30px serif";
    ctx.fillText(`Lives: ${hero.life}`, 110, 50);

    if(enemy.x === 700-enemy.width) {
        ctx.drawImage(arrowsImage, 305, 100, 90, 95);
        ctx.fillStyle = 'white'
        ctx.font = "30px serif";
        ctx.fillText(`Lives: ${enemy.life}`, 580, 50);
        ctx.font = "15px serif";
        ctx.fillText('ATTACK', 350, 95);
        ctx.fillText('MOCK', 425, 180);
        ctx.fillText('DEFEND', 275, 180)
    } else if (enemy.speedX != -1){
        ctx.fillStyle = 'yellow'
        ctx.beginPath();
        ctx.moveTo(350,120);
        ctx.lineTo(380,145);
        ctx.lineTo(350,170);
        ctx.closePath();
        ctx.fill();
        ctx.fillRect(300, 140, 50, 10);
    }
}

const mute = () => {
    if(isMuted) {
        isMuted = false;
        music.play();
    } else {
        isMuted = true;
        music.pause();
    }
}