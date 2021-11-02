class Enemy {
    constructor(lives, color, skills) {
        this.life = lives;
        this.x = 1000;
        this.y = 150;
        this.speedX = 0;
        this.width = 50;
        this.height = 100;
        // this.skills = ['attack', 'defend', 'mock'];
        this.skills = skills;
        this.isDefeated = false;
        this.color = color;
    }
    

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        if(this.life <= 0) {
            this.x = 2000
        }
        if(this.x > 600) {
            this.x += this.speedX;
        } else {
            this.x = 600;
        }
    }

    selectSkill()  {
        const rdmIndex = Math.floor(Math.random() * this.skills.length)
        return this.skills[rdmIndex];
    }

    defeated() {
        if(this.life <= 0) this.isDefeated = true;
        return this.isDefeated;
    }

}