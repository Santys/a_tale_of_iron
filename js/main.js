
// Listeners;
let music = ''
let keyFlag = true;

window.onload = () => {
    music = new Audio('./sounds/music.wav');
    music.preload = 'auto'
    music.load();
    music.play();
    music.volume = 0.1;
    music.loop = true;

    document.getElementById("mute-button").onclick = () => {
        mute();
      };

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            playerSkill(event.key)
        } else if (event.key === "ArrowLeft") {
            playerSkill(event.key)
        } else if (event.key === "ArrowUp") {
            playerSkill(event.key)
        } else if(event.key === "d"){
            if(keyFlag && enemy.x != 700-enemy.width){
                hero.run();
            } else if (enemy.x === 700-enemy.width){
                clearInterval(hero.runInterval);
                hero.img = hero.runImg[0];
                keyFlag = true;
            }
            enemy.speedX = -1;
            keyFlag = false;
        }
    });
    
    document.addEventListener("keyup", (event) => {
    if (event.key === "d") {
        enemy.speedX = 0;
        clearInterval(hero.runInterval);
        hero.img = hero.runImg[0];
        keyFlag = true;
    }
    });
}



// Run canvas
const updateCanvas = () =>  {
    game();
    
    requestAnimationFrame(updateCanvas);
}

updateCanvas();