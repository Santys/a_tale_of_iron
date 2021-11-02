class Background {
    constructor() {
        this.img0 = "./img/background_0.png"
        this.img1 = "./img/background_1.png"
    }

    drawBackground(){
        const imagen0 = new Image();
        imagen0.src = this.img0;
        ctx.drawImage(imagen0, 0, 0, 700, 300);
    }
}