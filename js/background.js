class Background {
    constructor(x , y) {
        this.img = "./img/background_0.png"
        // this.img1 = "./img/background_1.png"
        this.x = x;
        this.y = y;
    }

    drawBackground(){
        const imagen = new Image();
        imagen.src = this.img;
        ctx.drawImage(imagen, this.x, this.y, 700, 300);
    }
}