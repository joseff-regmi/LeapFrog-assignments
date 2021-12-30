

function gameSectionCss(gameSection){
    gameSection.style.width = '500px'
    gameSection.style.height = '600px'
    gameSection.style.border = '1px solid'
    gameSection.style.background = 'url(./images/bg.jpg)'
    gameSection.style.position = 'relative'
    gameSection.style.overflow = 'hidden'
}

function imageCss(ground){

    ground.style.width = '500px'
    ground.style.position = 'absolute'
    ground.style.bottom = '0px'
    ground.style.zIndex = '1'
}

function scoreCss(score){
    score.style.fontSize = '36px'
    score.style.display = 'block'
    score.style.color = 'white'
    score.style.zIndex = '1'
    score.style.position = 'absolute'
}

function menuCss(menu){
    menu.style.width = '500px'
    menu.style.background = '#93caed'
    menu.style.height = '200px'
    menu.style.position = 'absolute'
    menu.style.margin = 'auto'
    menu.style.left = '50%';
    menu.style.top = '50%';
    menu.style.transform = 'translate(-50%, -50%)'
    menu.style.zIndex = '3'
    menu.style.textAlign = 'center'
}

function playBtnCss(playBtn){
    playBtn.style.width = '70px';
    playBtn.style.height = '50px';
    playBtn.style.background = 'green';
    playBtn.style.color = 'white';
    playBtn.style.border = '0px';
    playBtn.style.borderRadius = '10px';
    playBtn.innerHTML = 'play';
    playBtn.style.marginTop = '50px';
}