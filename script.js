
let counter = 0;
const stepSize = 960;
const carousel = document.querySelector('.carousel-news');
const images = document.querySelectorAll('.main-news-item');
let buttonLeft = document.getElementsByClassName('news-prev');
let buttonRight = document.getElementsByClassName('news-next');
const carouselWidth = images.length * stepSize;

document.querySelector('.right').addEventListener('click', function() {
   
    if (buttonRight[0].classList.contains('disabled')) {
        return;
    }
    counter = counter + stepSize;

    if (counter >= stepSize * (images.length - 1)) {
        buttonRight[0].classList.add('disabled');
    };
    
    if (counter > 0) {
        buttonLeft[0].classList.remove('disabled');
    };
    carousel.style.left = -counter +'px';

    nextDot();
});

document.querySelector('.left').addEventListener('click', function() {
    if (buttonLeft[0].classList.contains('disabled')) {
        return;
    }

    counter = counter - stepSize;
    
    if (counter <= 0) {
        buttonLeft[0].classList.add('disabled');
    }
    
    if (counter < stepSize * (images.length - 1)) {
        buttonRight[0].classList.remove('disabled');
    }
   
    carousel.style.left = -counter +'px';

    prevDot();
});

let i=0;
function nextDot() {
    
    let j=document.getElementsByClassName('btn-dot').length;
    let dot=document.getElementsByClassName("btn-dot");

    dot[i].classList.remove("active");
    i=(j+i+1) % j;
    dot[i].classList.add("active");
}

function prevDot() {
    let j=document.getElementsByClassName('btn-dot').length;
    let dot=document.getElementsByClassName("btn-dot");

    dot[i].classList.remove("active");
    i=(j+i-1) % j;
    dot[i].classList.add("active");
}