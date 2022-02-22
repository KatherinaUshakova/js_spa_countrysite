
// window.addEventListener('load', () => {

//     const left = document.querySelector('.left');
//     const right = document.querySelector('.right');

//     const carousel = document.querySelector('.carousel-news');
//     const images = document.querySelectorAll('.main-news-item');

//     let counter = 0;
//     const stepSize = 960 
//     //images[0].clientWidth; //927//

// carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
// carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

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

let i=0;
let j=3;
let pic = document.getElementsByClassName("main-news-item"+ (i+1));
function next() {
    pic.classList.remove("active");
    i = (j + i + 1) % j;
    pic.classList.add("active");
}
