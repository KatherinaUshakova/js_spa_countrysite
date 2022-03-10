
alert(now);
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

    console.log(counter);

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
    
    let dot=document.getElementsByClassName("btn-dot");

    dot[i].classList.remove("active");
    i++;
    dot[i].classList.add("active");
}

function prevDot() {
    let dot=document.getElementsByClassName("btn-dot");

    dot[i].classList.remove("active");
    i--;
    dot[i].classList.add("active");
}

//Навигация по кружочкам//

// document.querySelector('.btn-dot').addEventListener('click', function() {

//     let dot=document.getElementsByClassName("btn-dot");
     //                              //сдвиг = номер точки * шаг - сколько мы уже прошли//
   
    // console.log(dot[i]);
    // counter = counter + stepSize;
    
    // let dotNum = dot[i];

    // offset = (dotNum * stepSize) - counter;


    // carousel.style.left = -offset +'px';
// });


function dotNav() {
    let dots = document.getElementsByClassName('btn-dot');

    let target = event.target;
    // let currentDot = get
    console.log(target);
    console.log(indexOf(target));
    console.log(dots);

    for (let j=0; j<dots.length; j++) {
       if (dots[j].classList.contains('active')) {
           activeDotIndex = j+1;
       }
    }

    counter = stepSize * activeDotIndex;

    offset = (id * stepSize) - offset;

    carousel.style.left = -offset +'px';
}