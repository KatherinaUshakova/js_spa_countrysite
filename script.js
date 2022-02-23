//способ 1. Работает но хз как//

// window.addEventListener('load', () => {

//     const left = document.querySelector('.left');
//     const right = document.querySelector('.right');
//     const carousel = document.querySelector('.carousel-news');
//     const images = document.querySelectorAll('.main-news-item');

//     let counter = 0;
//     const stepSize = 960 

//     right.addEventListener('click', () => {
//         counter >= images.length - 1 ? (counter = -1) : null;
//         carousel.classList.add('transformAnimation')
//         counter++;
//         carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
//     })

//     left.addEventListener('click', () => {
//         if (counter <= 0) counter = images.length;
//         carousel.classList.add('transformAnimation')
//         counter--;
//         carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
//     })
// })

// Способ 2. Упрощенный Способ 1//

let counter = 0;
const stepSize = 960;
const carousel = document.querySelector('.carousel-news');
const images = document.querySelectorAll('.main-news-item');
let first = document.getElementsByClassName('news-next');
let last = document.getElementsByClassName('news-next');

document.querySelector('.right').addEventListener('click', function() {
    
    counter = counter + stepSize;
    console.log(counter);
    if (counter == stepSize * (images.length-1)) {
        last[0].classList.add("disabled");
        console.log(counter);
    };
    
    if (counter == 0){
        first[0].classList.remove("disabled");
        console.log(counter);
    };
    
    carousel.style.left = -counter +'px';
})

document.querySelector('.left').addEventListener('click', function() {
    
    counter = counter - stepSize;
    console.log(counter);
    
    if (counter == 0) {
        first[0].classList.add('disabled');
        console.log(counter);
    }
    
    if (counter == stepSize * (images.length-1)) {
        last[0].classList.remove('disabled');
        console.log(counter);
    }

    carousel.style.left = +counter +'px';
})


//Способ 3. Меняет классы, но не крутит. Задумывалось как display: block/none//

// let i=0;

// function next() {
    
//     let j=document.getElementsByClassName('main-news-item').length;
//     let pic=document.getElementsByClassName("main-news-item");

//     pic[i].classList.remove("active");
//     i=(j+i+1) % j;
//     pic[i].classList.add("active");
// }

// function prev() {
    
//     let j=document.getElementsByClassName('main-news-item').length;
//     let pic=document.getElementsByClassName("main-news-item");

//     pic[i].classList.remove("active");
//     i=(j+i-1) % j;
//     pic[i].classList.add("active");
// }

//Точки//

const dots = document.querySelectorAll('.dots');