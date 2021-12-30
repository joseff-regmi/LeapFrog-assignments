let topBird = 200;
let leftBird = 100;
let gravityBird = 3;
let obstacleHeight = 250;
let isGameOver = false;
let score = 0;


class Flappy{
    constructor(){
        this.gameSection = document.createElement('div');
        gameSectionCss(this.gameSection);
        document.body.appendChild(this.gameSection);

        this.ground = new Image();
        this.ground.src = 'images/bgGround.png';
        imageCss(this.ground);
        this.gameSection.appendChild(this.ground);

        this.score = document.createElement('span');
        scoreCss(this.score);
        this.gameSection.appendChild(this.score);

        this.birdFly();

        // this.beforAndAfter()

        if (isGameOver == false){
        setTimeout(() => {
            game.obstacles();
        }, 3000);}
    };

    birdFly(){
        this.bird = document.createElement('div');
        this.bird.style.width = '50px';
        this.bird.style.height = '40px';
        this.bird.style.position = 'absolute';
        this.bird.style.zIndex = '3'
        this.gameSection.appendChild(this.bird);

        this.birdImage = new Image();
        this.birdImage.style.width = '50px';
        this.birdImage.style.height = '40px';
        this.birdImage.src = 'images/bird.png';
        this.bird.appendChild(this.birdImage);
    }

    startGame(){
        topBird += gravityBird; 
        this.bird.style.top = `${topBird}px`;
        this.bird.style.left = `${leftBird}px`;
    }

    jump(){
        if(topBird > 50){
            topBird -= 50;
            this.bird.style.top = `${topBird}px`;
        };
    };

    obstacles(){
        this.obstacleBottom = Math.random()*60;
        this.left = 500;
        this.obstacle = document.createElement('div');
        this.obstacle.style.width = '50px';
        this.obstacle.style.height = `${obstacleHeight}px`;
        this.obstacle.style.left = `${this.left}px`;
        this.obstacle.style.background = 'url(./images/upwardPipe.png)';
        this.obstacle.style.backgroundSize = 'contain';
        this.obstacle.style.position = 'absolute';
        this.obstacle.style.bottom = `${this.obstacleBottom}px`;
        this.gameSection.appendChild(this.obstacle);

        this.topObstacle = document.createElement('div');
        this.topObstacleGap = Math.random()*10;
        this.topObstacleHeight = 185;
        this.topObstacle.style.width = '50px';
        this.topObstacle.style.height = `${this.topObstacleHeight}px`;
        this.topObstacle.style.left = `${this.left}px`;
        this.topObstacle.style.background = 'url(./images/downwardPipe.png)';
        this.topObstacle.style.backgroundSize = 'contain';
        this.topObstacle.style.position = 'absolute';
        this.gameSection.appendChild(this.topObstacle);

        if(isGameOver == false){
        setTimeout(() => {
            game.obstacles();
        }, 3000);
    }
    }
    moveObstacles(){
        if(this.obstacle){
            this.left -= 3;
            this.obstacle.style.left = `${this.left}px`;
            this.topObstacle.style.left = `${this.left}px`;
        }
        if (this.left == -70){
            score += 1
            this.score.innerHTML = `Score: ${score}`;
            this.gameSection.removeChild(this.obstacle);
            this.gameSection.removeChild(this.topObstacle);
        }
        if(topBird > 470 || this.left > 100 && leftBird === 100
            && this.left < 150 && (530 - obstacleHeight < topBird ||
            topBird<this.topObstacleHeight + this.topObstacleGap)){
            this.gameOver()
        } 
    }
    
    gameOver(){
        clearInterval(birdInterval);
        clearInterval(moveObs);
        isGameOver = true;
        this.bird.style.transform = 'rotate(50deg)';
        this.bird.style.borderRadius = '20px';
        this.bird.style.top = '470px';

        this.overImage = new Image()
        this.overImage.src = 'images/gameOver.png'
        this.overImage.style.position = 'absolute'
        this.overImage.style.width = '500px'
        this.overImage.style.top = '180px'
        this.gameSection.appendChild(this.overImage)

    }

    // beforAndAfter(){

    //     this.menu = document.createElement('div')
    //     menuCss(this.menu)
    //     document.body.appendChild(this.menu)

    //     this.playBtn = document.createElement('button');
    //     this.playBtn.setAttribute('id', 'palyBtn-id');
    //     playBtnCss(this.playBtn)
    //     this.menu.appendChild(this.playBtn);

    //     this.playBtn.addEventListener('click', (e)=>{    
    //     this.menu.style.display = 'none'
    //     })
    // }
}

const game = new Flappy()

const birdInterval = setInterval(()=>{
    game.startGame();
    }, 20)

const moveObs = setInterval(() => {
    game.moveObstacles();
    }, 10);

document.addEventListener('keydown', (e)=>{ 
    if(e.key == 'ArrowUp'){
        game.jump();
    }
})


