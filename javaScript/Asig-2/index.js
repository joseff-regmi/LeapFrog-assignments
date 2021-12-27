let imageList = [
    'images/mount-everest.jpg',
    'images/mount-machha.jpg',
    'images/mount-kanchan.jpg',
]


class Warper{
    constructor(imageWidth, imageHeight, imageList, hold){
        this.e = document.getElementById('image-slider-warper-id')
        this.e.style.width = `${imageWidth}px`;
        this.e.style.height = `${imageHeight}px`;
        this.e.style.border = '0px';
        this.e.style.overflow = 'hidden';
        this.e.style.position = 'relative';
        this.imageList = imageList;
        this.hold = hold;
        this.getSlider(imageWidth, imageHeight, imageList);
        this.getNext();
        this.getPrev();
        this.getBtnContainer();
        // this.setEventListeners();
    }

    getSlider(width, height, images){
        this.imageListLength = Object.values(images).length;
        this.imageSlider = document.getElementById('image-slider-id');
        this.imageSlider.style.width = `${width*this.imageListLength}px`;
        this.imageSlider.style.height = `${height}px`;
        this.imageSlider.style.position = 'relative'

        for(let i = 0; i < this.imageListLength; i++){
            this.img = new Image()
            this.img.style.position = 'absolute';
            this.img.style.width = `${width}px`;
            this.img.style.height = `${height}px`;
            this.img.style.left = `${width * i}px`;
            this.img.style.float = 'right'
            this.img.src = images[i];
            this.imageSlider.appendChild(this.img);
        };
    }


    getNext(){
        this.btn = document.getElementById('right-btn-id');
        this.btn.style.width = '35px';
        this.btn.style.top = '45%';
        this.btn.style.left = '94%';
        this.btn.style.position = 'absolute';
        this.btn.style.background = 'black';
        this.btn.style.opacity = '0.5';
        this.btn.style.border = '0px';
        this.btn.style.borderRadius = '50%';

    }

    getPrev(){
        this.btn = document.getElementById('left-btn-id');
        this.btn.style.width = '35px';
        this.btn.style.top = '45%';
        this.btn.style.left = '1%';
        this.btn.style.position = 'absolute';
        this.btn.style.background = 'black';
        this.btn.style.opacity = '0.5';
        this.btn.style.border = '0px';
        this.btn.style.borderRadius = '50%';
    }

    getBtnContainer(){
        this.btnContainer = document.getElementById('btn-container-id');
        this.btnContainer.style.position = 'absolute';
        this.btnContainer.style.width = '100%';
        this.btnContainer.style.display = 'block';
        this.btnContainer.style.top = '95%';
        this.btnContainer.style.textAlign = 'center';

        for(let i = 0; i < 3; i++){
            this.radioBtn = document.createElement('button');
            this.radioBtn.setAttribute('class', 'radioBtn');
            this.radioBtn.style.marginLeft = '10px';
            this.radioBtn.style.marginRight = '10px';
            this.radioBtn.style.width = '15px';
            this.radioBtn.style.height = '15px';
            this.radioBtn.style.borderRadius = '50%';
            this.radioBtn.style.border = '0px';
            this.radioBtn.style.cursor = 'pointer';
            this.btnContainer.appendChild(this.radioBtn);
        };
    };

    // setEventListeners(){

    // }

};

const warper = new Warper(700, 480, imageList) 

