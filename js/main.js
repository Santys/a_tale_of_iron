
// Listeners;
let music = ''

window.onload = () => {
    music = new Audio('./sounds/music.wav');
    music.preload = 'auto'
    music.load();
    music.play();
    music.volume = 0.1;
    music.loop = true;

    document.getElementById("mute-button").onclick = () => {
        console.log("mute")
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
            enemy.speedX = -1;
        }
    });
    
    document.addEventListener("keyup", (event) => {
    if (event.key === "d") {
        enemy.speedX = 0;
    }
    });
}



// Run canvas
const updateCanvas = () =>  {
    game();

    requestAnimationFrame(updateCanvas);
}

updateCanvas();