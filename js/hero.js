class Hero {
    constructor() {
        this.life = 5;
        this.x = 0;
        this.y = 120;
        this.width = 220;
        this.height = 220;
        this.skills = ['attack', 'defend', 'mock'];
        this.isDefeated = false;
        this.img = "./img/warrior_walk_0.png"
    }
    

    draw() {
        // ctx.fillStyle = 'navy'
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        const imagen = new Image();
        imagen.src = this.img;
        ctx.drawImage(imagen, this.x, this.y, this.width, this.height);
    }

    selectSkill(skill) {
        return this.skills[skill];
    }

    defeated() {
        if(this.life <= 0) this.isDefeated = true;
        return this.isDefeated;
    }
}