class Hero {
    constructor() {
        this.life = 1;
        this.x = 50;
        this.y = 150;
        this.width = 50;
        this.height = 100;
        this.skills = ['attack', 'defend', 'mock'];
        this.isDefeated = false;
    }
    

    draw() {
        ctx.fillStyle = 'navy'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    selectSkill(skill) {
        return this.skills[skill];
    }

    defeated() {
        if(this.life <= 0) this.isDefeated = true;
        return this.isDefeated;
    }
}