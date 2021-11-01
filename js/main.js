// Listeners
window.onload = () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            playerSkill(event.key)
        } else if (event.key === "ArrowLeft") {
            playerSkill(event.key)
        } else if (event.key === "ArrowUp") {
            playerSkill(event.key)
        }
    });

}



// Run canvas
const updateCanvas = () =>  {
    game();

    requestAnimationFrame(updateCanvas);
}

updateCanvas();