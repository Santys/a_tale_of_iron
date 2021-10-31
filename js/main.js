
// Run canvas
const updateCanvas = () =>  {
    game();

    requestAnimationFrame(updateCanvas);
}

updateCanvas();