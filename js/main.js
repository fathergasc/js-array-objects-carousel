const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

let activeImage = 0;

const sliderDom = document.querySelector('.slider');
const thumbnailsDom = document.querySelector('.thumbnails')

for (let i = 0; i < images.length; i++) {
    sliderDom.innerHTML += `<div class="card">
                                <img class="card-img" src="${images[i]}">
                            </div>`;
    thumbnailsDom.innerHTML += `<div class="img-wrap">
                                    <div class="thumbnail">
                                        <img class="thumbnail-img" src="${images[i]}">
                                        <div class="thumbnail-overlay"></div>
                                    </div>
                                </div>`;
}

const imagesList = document.querySelectorAll('.card');
imagesList[activeImage].classList.add('show');

const thumbnailOverlayList = document.querySelectorAll('.thumbnail-overlay');
thumbnailOverlayList[activeImage].classList.add('remove-overlay');


const nextDom = document.getElementById('next');
const previousDom = document.getElementById('previous');

nextDom.addEventListener('click',
    function () {
        imagesList[activeImage].classList.remove('show');
        thumbnailOverlayList[activeImage].classList.remove('remove-overlay');
        
        if (activeImage == imagesList.length - 1) {
            activeImage = 0;
        } else {
            activeImage++;
        }
        imagesList[activeImage].classList.add('show');
        thumbnailOverlayList[activeImage].classList.add('remove-overlay');   
    }
)

previousDom.addEventListener('click',
    function () {
        imagesList[activeImage].classList.remove('show');
        thumbnailOverlayList[activeImage].classList.remove('remove-overlay');
        
        if (activeImage == 0) {
            activeImage = imagesList.length - 1;
        } else {
            activeImage--;
        }
        imagesList[activeImage].classList.add('show');
        thumbnailOverlayList[activeImage].classList.add('remove-overlay');        
    }
)

