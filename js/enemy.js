class Enemy {
    constructor() {
        this.life = 1;
        this.x = 600;
        this.y = 150;
        this.width = 50;
        this.height = 100;
    }
    

    draw() {
        ctx.fillStyle = 'DarkRed'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}