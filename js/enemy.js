class Enemy {
    constructor(lives, number, skills) {
        this.life = lives;
        this.x = 1000;
        this.y = 110;
        this.speedX = 0;
        this.width = 240;
        this.height = 160;
        // this.skills = ['attack', 'defend', 'mock'];
        this.skills = skills;
        this.isDefeated = false;
        this.number = number;
        this.img = ["./img/golem_01_Idle_000.png", "./img/golem_02_Idle_000.png", "./img/golem_03_Idle_000.png", "./img/boss_Idle_000.png"]
    }
    

    draw() {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        const imagen = new Image();
        imagen.src = this.img[this.number];
        ctx.drawImage(imagen, this.x, this.y, this.width, this.height);
    }

    move() {
        if(this.life <= 0) {
            this.x = 2000
        }
        if(this.x > 700-this.width) {
            this.x += this.speedX;
        } else {
            this.x = 700-this.width;
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