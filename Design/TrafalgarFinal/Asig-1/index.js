// create object that will contain all the path of the images ----- done
// create a function to manage layouts of warper-----------done
// best practice is use to get element by it's id in js-------done
// use single quote in js to enclose the attributes of document(html)-----done
// center the slide warper--------- done


//paths of the images
let imagesPath = {
    path1:'images/mount-everest.jpg',
    path2:'images/mount-machha.jpg',
    path3:'images/mount-kanchan.jpg',
}

// dimensions of images
let dimensionsImages = {
    imageWidth: '700',
    imageHeight: '450',
}

// dimensions of the containers
let lengthOfPath = Object.keys(imagesPath).length

let dimensionsWarpers = {
    sliderWarperWidth: '700',
    sliderWarperHeight: '450',
    sliderWidth: dimensionsImages.imageWidth*lengthOfPath, 
    sliderHeight: '450',
}


//Vissible window for the slider
let getSliderWarper = document.getElementById('image-slider-warper-id');

const sliderWarper = () =>{
    let sW = getSliderWarper.style
    sW.position = 'absolute'
    sW.width = dimensionsWarpers.sliderWarperWidth + 'px'
    sW.height = '450' + 'px'
    sW.border = '1px solid black'
    sW.left = '50%'
    sW.top = '50%'
    sW.transform = 'translate(-50%, -50%)'
    sW.overflow = 'hidden'

    return getSliderWarper
}

sliderWarper()

//slider contains the images horzontally stacked to slide it horizontally
let imageSlider = document.getElementById('image-slider-id')
let values = Object.values(imagesPath)
const slider = () =>{

    imageSlider.style.width = dimensionsWarpers.sliderWidth + 'px'
    imageSlider.style.height = dimensionsWarpers.sliderHeight + 'px'
    imageSlider.style.position = 'relative'

    for(let i = 0; i < values.length; i++){
        let img = new Image();
        img.style.position = 'absolute'
        img.style.width = `${dimensionsImages.imageWidth}px`
        img.style.height = `${dimensionsImages.imageHeight}px`
        img.style.left = `${dimensionsImages.imageWidth * i}px`
        img.style.float = 'right'
        img.src = values[i];
        imageSlider.appendChild(img)

    }
}

slider()

let currentIndex = 0;
let flag = true;

const btnRight = () => {
    const btnTemp = document.getElementById('right-btn-id')
    bT = btnTemp.style
    bT.position = 'absolute'
    bT.width = '35px'
    bT.float = 'right'
    bT.top = '45%' 
    bT.left = '95%'   
    bT.border = '0px'    
    bT.background = 'transparent'

    btnTemp.onclick = () => {
        currentIndex++
        if(currentIndex > lengthOfPath-1){
            currentIndex = 0
        }

        imageSlider.style.left = `-${currentIndex * dimensionsImages.imageWidth}px`
    }
    return btnTemp
}

btnRight()

const btnLeft = () => {
    const btnTemp = document.getElementById('left-btn-id')
    let bT = btnTemp.style
    bT.position = 'absolute'
    bT.width = '35px'
    bT.float = 'left'
    bT.top = '45%'    
    bT.border = '0px'    
    bT.background = 'transparent' 
    
    btnTemp.onclick = () => {
        currentIndex--

        if(currentIndex<0){
            currentIndex = lengthOfPath -1
        }
        imageSlider.style.left = `-${currentIndex * dimensionsImages.imageWidth}px`
    }
    return btnTemp
}

btnLeft()


const getBtnContainer = document.getElementById('btn-container-id')

const btnContainer = () => {
    bC = getBtnContainer.style
    bC.position = 'absolute'
    bC.width = '100%'
    bC.display = 'block'
    bC.top = '95%'
    bC.textAlign = 'center'

    for(let i = 0; i < values.length; i++){
        let btn = document.createElement('button')
        btn.setAttribute('class', 'radioBtn')
        let b = btn.style
        b.marginLeft = '10px'
        b.marginRight = '10px'
        b.width = '15px'
        b.height = '15px'
        b.borderRadius = '50%'
        b.backgroundColor = '#cbcbcb'
        b.border = '0px'
        getBtnContainer.appendChild(btn)
    }

    let btns = getBtnContainer.children
    
    for(let i = 0; i < btns.length; i++){
        btns[i].onclick = () => {
            imageSlider.style.left = `-${i * dimensionsImages.imageWidth}px`
            // btns[i].style.background = '#666'
        }
    }
}


btnContainer()


