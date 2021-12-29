
function gameSectionCss(gameSection){
    gameSection.style.width = '800px';
    gameSection.style.height = '700px';
    gameSection.style.background = 'url(./images/bg.jpg)';
    gameSection.style.margin = 'auto';
    gameSection.style.backgroundSize = 'contain';
    gameSection.style.textAlign ='center';
}

function roadCss(road){
    road.style.width = '400px';
    road.style.height = '700px';
    road.style.background = 'url(./images/road.jpg)';
    road.style.backgroundSize = 'contain';
    road.style.margin = 'auto';
    road.style.position = 'relative';
}

function boardCss(board){
    board.style.width = '400px';
    board.style.height = '40px';
    board.style.paddingTop = '10px';
    board.style.background = '#93caed';
    board.style.margin = '0px';
    board.style.position = 'absolute';
}

function menuCss(menu){
    menu.style.width = '400px';
    menu.style.height = '300px';
    menu.style.background = '#93caed';
    menu.style.position = 'absolute';
    menu.style.top = '250px';
    menu.style.textAlign = 'center';
    menu.style.display = 'block';
}

function messageCss(message){
    message.style.display = 'block';
    message.innerHTML = 'WELCOME';
    message.style.fontSize = '30px';
    message.style.marginTop = '50px';
}

function sloganCss(slogan){
    slogan.style.display = 'block';
    slogan.innerHTML = 'Ready To Race ?';
    slogan.style.fontSize = '20px';
    slogan.style.marginTop = '25px';
}

function btnCss(playbtn){
    playbtn.style.width = '70px';
    playbtn.style.height = '50px';
    playbtn.style.background = 'green';
    playbtn.style.color = 'white';
    playbtn.style.border = '0px';
    playbtn.style.borderRadius = '10px';
    playbtn.innerHTML = 'play';
    playbtn.style.marginTop = '50px';
}

function yourScoreCss(score){
    score.style.padding = '10px';
    score.style.marginTop = '20px';
    
}

function mainCarCss(mainCarDiv){
    mainCarDiv.style.position = 'absolute';
    mainCarDiv.style.bottom = '20px';
}

function mainCarImgCss(mainCarImg){
    mainCarImg.style.width = '60px';
    
}

