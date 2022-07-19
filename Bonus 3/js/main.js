const images = 
[
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
let activeImage = 0;

const sliderDom = document.querySelector('.slider');
const thumbnailsDom = document.querySelector('.thumbnails')

for (let i = 0; i < images.length; i++) {
    const imagesI = images[i]
    sliderDom.innerHTML += `<div class="card">
                                <div id="text-overlay">
                                    <h2>${imagesI.title}</h2>
                                    <p>${imagesI.description}</p>
                                </div>
                                <img class="card-img" src="${imagesI.url}">
                            </div>`;
    thumbnailsDom.innerHTML += `<div class="img-wrap">
                                    <div class="thumbnail">
                                        <img class="thumbnail-img" src="${imagesI.url}">
                                        <div class="thumbnail-overlay"></div>
                                    </div>
                                </div>`;
}

const imagesList = document.querySelectorAll('.card');
imagesList[activeImage].classList.add('show');

const thumbnailOverlayList = document.querySelectorAll('.thumbnail-overlay');
thumbnailOverlayList[activeImage].classList.add('remove-overlay');

let autoPlay = setInterval(autoPlayF, 3000);

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
        clearInterval(autoPlay);
        autoPlay = setInterval(autoPlayF, 3000);
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
        clearInterval(autoPlay);
        autoPlay = setInterval(autoPlayF, 3000);
    }
)

const thumbnailsList = document.getElementsByClassName('img-wrap'); // returns a list of elements as an array, you can use .addEventListener directly on the array, you have to cycle through the array to add event listeners

for (let i = 0; i < thumbnailsList.length; i++) {
    thumbnailsList[i].addEventListener('click',
        function () {
            imagesList[activeImage].classList.remove('show');
            thumbnailOverlayList[activeImage].classList.remove('remove-overlay');
            activeImage = i;   //clicking on the next and prev buttons adds or subtracts from the activeImage value, but,clicking on the thumbnails, it can't change linearly and I have to assign i to activeImage index 
            imagesList[activeImage].classList.add('show');
            thumbnailOverlayList[activeImage].classList.add('remove-overlay');
            clearInterval(autoPlay);
            autoPlay = setInterval(autoPlayF, 3000);
        }
    )
}

const playDom = document.getElementById('play');
const pauseDom = document.getElementById('pause');
const reverseDom = document.getElementById('reverse');

playDom.addEventListener('click',
    function () {
        autoPlay = setInterval(autoPlayF, 3000);
    }
)

pauseDom.addEventListener('click',
    function () {
        clearInterval(autoPlay);
    }
)

// functions

function autoPlayF () {
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
