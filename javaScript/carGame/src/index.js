class Game{
    constructor(){
        this.gameSection = document.createElement('div');
        this.gameSection.setAttribute('id', 'gameSection-id');
        gameSectionCss(this.gameSection);
        document.body.appendChild(this.gameSection);
        this.setupRoad();
        this.setupScoreBoard();
        this.setupMenu();
        
    }

    setupRoad(){
        this.road = document.createElement('div');
        this.road.setAttribute('id', 'road-id');
        roadCss(this.road);
        this.gameSection.appendChild(this.road);

    }

    setupScoreBoard(){
        this.board = document.createElement('div');
        this.board.setAttribute('id', 'board-id');
        boardCss(this.board);
        this.road.appendChild(this.board);

        this.yourScore = document.createElement('span');
        this.yourScore.setAttribute('id', 'yourScore-id');
        yourScoreCss(this.yourScore);
        this.yourScore.innerHTML = 'your score: 0';
        this.board.appendChild(this.yourScore);

        this.speed = document.createElement('span');
        this.speed.setAttribute('id', 'speed-id');
        yourScoreCss(this.speed);
        this.speed.innerHTML = 'speed: 0 m/s'
        this.board.appendChild(this.speed);

        this.heigestScore = document.createElement('span');
        this.heigestScore.setAttribute('id', 'heigestScore-id');
        yourScoreCss(this.heigestScore);
        this.heigestScore.innerHTML = 'heigest score: 0';
        this.board.appendChild(this.heigestScore);
    }

    setupDivider(){
        for (let i = 0; i < 5; i++){
            this.divider = document.createElement('div');
            this.divider.setAttribute('id', 'divider-id');
            this.divider.style.background = 'white';
            this.divider.style.width = '10px';
            this.divider.style.display = 'block';
            this.divider.style.paddingTop = '100px';
            this.divider.style.margin = 'auto';
            this.divider.style.position = 'aboslute';
            this.road.appendChild(this.divider);
        };
    };

    setupMenu(){
        this.menu = document.createElement('div');
        this.menu.setAttribute('id', 'menu-id');
        menuCss(this.menu);
        this.road.appendChild(this.menu);

        this.message = document.createElement('span');
        this.message.setAttribute('id', 'message-id');
        messageCss(this.message);
        this.menu.appendChild(this.message);

        this.slogan = document.createElement('span');
        this.slogan.setAttribute('id', 'slogan-id');
        sloganCss(this.slogan);
        this.menu.appendChild(this.slogan);

        this.playBtn = document.createElement('button');
        this.playBtn.setAttribute('id', 'palyBtn-id');
        btnCss(this.playBtn);
        this.menu.appendChild(this.playBtn);

        this.playBtn.addEventListener('click', (e)=>{this.gamePlay(), this.obstacle()});
    }


    gamePlay(){
        this.menu.style.display = 'none';
        this.mainCar = document.createElement('div');
        this.mainCar.setAttribute('id', 'mainCar-id');
        mainCarCss(this.mainCar);
        this.road.appendChild(this.mainCar);

        this.mainCarImg = new Image();
        mainCarImgCss(this.mainCarImg);
        this.mainCarImg.src = 'images/mainCar.png';
        this.mainCar.appendChild(this.mainCarImg);

        this.currentPosition = 170;
        this.mainCar.style.left = `${this.currentPosition}px`;
        this.mainCar.style.transform = 'rotate(0deg)';

        document.addEventListener('keydown', (e)=>{
            if(e.key == 'ArrowLeft' && this.currentPosition>50){
                this.mainCar.style.left = `${this.currentPosition}px`;
                this.mainCar.style.transform = 'rotate(-10deg)';
                this.currentPosition -= 5;

            }else if(e.key == 'ArrowRight' && this.currentPosition<290){
                this.mainCar.style.left =  `${this.currentPosition}px`;
                this.mainCar.style.transform = 'rotate(10deg)';
                this.currentPosition += 5;
                }
        })

    }

    obstacle(){
        for (let i = 0; i < 3; i++){
             this.otherCar = document.createElement('div');
             this.otherCar.setAttribute('class', 'otherCar');
             this.otherCar.style.width = '80px';
             this.otherCar.style.height = '100px';
             this.otherCar.style.position = 'absolute';
             this.otherCar.style.top = `${randomGenerator(50, 400) }px`;
             this.otherCar.style.left = `${randomGenerator(30, 290)}px`;
             this.road.appendChild(this.otherCar);

             this.otherCarImg = new Image();
             mainCarImgCss(this.otherCarImg);
             this.otherCarImg.src = 'images/otherCar.png';
             this.otherCar.appendChild(this.otherCarImg);
        }
    }
}


function randomGenerator(min, max){
    let diff = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * diff);
    rand = rand + min;

    return rand;
    }


new Game()