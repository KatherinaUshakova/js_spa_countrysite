window.onload = addRuText();

const stepSize = -960;
const carousel = document.querySelector('.carousel-news');
const images = document.querySelectorAll('.main-news-item');
let buttonLeft = document.getElementsByClassName('news-prev');
let buttonRight = document.getElementsByClassName('news-next');

document.querySelector('.right').addEventListener('click', function() {
    if (buttonRight[0].classList.contains('disabled')) {
        return;
    }

    let leftOffset = parseInt(carousel.style.left, 10) + stepSize;

    carousel.style.left = leftOffset + 'px';

    RightBtnIfDisabled(leftOffset);
    nextDot();
});

document.querySelector('.left').addEventListener('click', function() {
    if (buttonLeft[0].classList.contains('disabled')) {
        return;
    }

    let leftOffset = parseInt(carousel.style.left, 10) - stepSize;

    carousel.style.left = leftOffset + 'px';

    LeftBtnIfDisabled(leftOffset);
    prevDot();
});

//переключение кружочков//

function nextDot() {
    let dots = document.getElementsByClassName("btn-dot");

    for (let j = 0; j < dots.length; j++) {
        if (dots[j].classList.contains('active')) {
            activeDotIndex = j;            
        }
    }

    dots[activeDotIndex].classList.remove("active");

    activeDotIndex++;

    dots[activeDotIndex].classList.add("active");
}

function prevDot() {
    let dots = document.getElementsByClassName("btn-dot");

    for (let j = 0; j < dots.length; j++) {
        if (dots[j].classList.contains('active')) {
            activeDotIndex = j;            
        }
    }

    dots[activeDotIndex].classList.remove("active");

    activeDotIndex--;

    dots[activeDotIndex].classList.add("active");
}

//Навигация по кружочкам//
let navDots = document.querySelectorAll('.btn-dot');

for (let i = 0; i < navDots.length; i++) {
    navDots[i].addEventListener('click', function(event) {
        carousel.style.left = i * stepSize +'px';

        for (let j = 0; j < navDots.length; j++) {
            navDots[j].classList.remove('active');
        }

        navDots[i].classList.add('active');

        checkButtonsDisabledStatus(parseInt(carousel.style.left, 10));
    });
}

function checkButtonsDisabledStatus(leftOffset) {
    RightBtnIfDisabled(leftOffset);
    LeftBtnIfDisabled(leftOffset);
}

function RightBtnIfDisabled(leftOffset) {
    if (leftOffset == stepSize * (images.length - 1)) {
        buttonRight[0].classList.add('disabled');
    };
    
    if (leftOffset < 0) {
        buttonLeft[0].classList.remove('disabled');
    };
}

function LeftBtnIfDisabled(leftOffset) {
    if (leftOffset == 0) {
        buttonLeft[0].classList.add('disabled');
    }
    
    if (leftOffset > stepSize * (images.length - 1)) {
        buttonRight[0].classList.remove('disabled');
    }
}


//привязка текста//

function addRuText(){
    // addHeaderText(); //not yet//
    addNavText();
    // addAsideText(); //not yet//
    addAdditionalNewsText();
}

function addNavText() {
    let navContainer = document.querySelector('.main-nav');
    let navItems = ru.navigation; 

    console.log(navItems);

    for (let item of navItems) {

        let navList = document.createElement('li');

    navList.innerHTML = `<a href="#"> ${item} </a></li> `;
    navContainer.insertAdjacentElement("beforeend", navList);
    }
}

function addAdditionalNewsText() {

    let adHeaderContainer = document.querySelector('.add-inf');

    let adInfHeader = document.createElement('h4');
    adInfHeader.innerHTML = ru.adInfHeader;

    adHeaderContainer.insertAdjacentElement("afterbegin", adInfHeader);
    };
    
    {
    let actualLinkBox = document.querySelector('.links-container');
    let newsList = ru.newsItem; 

    for (let newItem of newsList) { 
        let title = newItem.title;
        let description = newItem.description;

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `<a href="#" class="actual-link"> <p class="link-title"> ${title} </p> 
        <p class="link-desctiption"> ${description} </p> `;

        actualLinkBox.insertAdjacentElement("afterbegin", newDiv);
    }; 
}