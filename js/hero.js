class Hero {
    constructor() {
        this.life = 3;
        this.x = 50;
        this.y = 150;
        this.width = 50;
        this.height = 100;
    }
    

    draw() {
        ctx.fillStyle = 'navy'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}