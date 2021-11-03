class Hero {
    constructor() {
        this.life = 5;
        this.x = 0;
        this.y = 120;
        this.width = 220;
        this.height = 220;
        this.skills = ['attack', 'defend', 'mock'];
        this.isDefeated = false;
        this.runInterval = "";
        this.runCurrImg = "";
        this.n = 0;
        this.img = "./img/warrior_run_0.png";
        this.runImg = [
            "./img/warrior_run_0.png",
            "./img/warrior_run_1.png",
            "./img/warrior_run_2.png",
            "./img/warrior_run_3.png",
            "./img/warrior_run_4.png",
            "./img/warrior_run_5.png",
            "./img/warrior_run_6.png",
            "./img/warrior_run_7.png",
            "./img/warrior_run_8.png",
            "./img/warrior_run_9.png",
            "./img/warrior_run_10.png",
            "./img/warrior_run_11.png",
            "./img/warrior_run_12.png",
            "./img/warrior_run_13.png",
            "./img/warrior_run_14.png",
        ];
        this.resultImg = ["./img/warrior_victory.png", "./img/warrior_defeat.png",]
    }
    

    draw() {
        // ctx.fillStyle = 'navy'
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        const imagen = new Image();
        imagen.src = this.img;
        ctx.drawImage(imagen, this.x, this.y, this.width, this.height);
    }

    drawResult(result){
        const imagen = new Image();
        imagen.src = this.resultImg[result];
        ctx.drawImage(imagen, (700 - this.width) / 2, 320 - this.height, this.width, this.height);
    }

    selectSkill(skill) {
        return this.skills[skill];
    }

    defeated() {
        if(this.life <= 0) this.isDefeated = true;
        return this.isDefeated;
    }

    run() {
        this.runInterval = setInterval(() => {
            if(this.runCurrImg === this.runImg[this.n]){
                if(this.n > 12) this.n = -1;
                this.runCurrImg = this.runImg[this.n+1]
                this.n++;
            } else {
                this.runCurrImg = this.runImg[0]
            }
            this.img = this.runCurrImg;
        }, 30);
        
    }

}