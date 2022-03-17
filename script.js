window.onload = addText(language['ru']);

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
};

//Кнопки смены языка//

let langBtns = document.querySelectorAll('.btn-lang');

for (let i = 0; i < langBtns.length; i++) {

    langBtns[i].addEventListener('click', function() {
        let html = document.getElementsByTagName('html');
        let currentLang = html[0].getAttribute('lang');
        let btnLang = langBtns[i].classList[0];

        if (btnLang != currentLang) {
            html[0].setAttribute("lang", btnLang);
            langBtns[i].classList.add('lang-active');
            addText(language[btnLang]);
        }  

        for (let j = 0; j < langBtns.length; j++) {
            if (j != i) {
            langBtns[j].classList.remove('lang-active');
            }
        }
    });
};


//привязка текста//

function addText(language){
    addHeaderText(language.mainHeader); //not yet//
    addNavText(language.navigation);
    addAsideText(language.asideHeader); //not yet//
    addAdditionalNewsText(language.newsItem, language.adInfHeader);
};

function addHeaderText(header) {
    let mainHeader = document.querySelector('.mainHeader');
    mainHeader.innerHTML = header;
}

function addNavText(nav) {
    
    let navContainer = document.querySelector('.main-nav');
    let navItem = document.querySelectorAll('.nav-item');
    console.log(navItem);
    for (let item of nav) {
    
        for (let i=0; i < navItem.length; i++) {
        navItem[i].innerHTML = item.name;
        console.log(item.name);
        
        }}
    // navList.innerHTML = `<a href="${item.link}"> ${item.name} </a>`;
    // navContainer.insertAdjacentElement("beforeend", navList);
    

    //как было -> //
    // let navContainer = document.querySelector('.main-nav');
    
    // for (let item of nav) {

    //     let navList = document.createElement('li');

    // navList.innerHTML = `<a href="${item.link}"> ${item.name} </a>`;
    // navContainer.insertAdjacentElement("beforeend", navList);
    // }
        //Попробовать через element.setAttribute и просто присваиванием//
        // .... иначе - createElement ... // 

}

function addAsideText(header) {
    let asideHeader = document.querySelector('.asideHeader');
    asideHeader.innerHTML = header;
}

function addAdditionalNewsText(newsList, header) {
    let adHeaderContainer = document.querySelector('.addInfHeader');
    adHeaderContainer.innerHTML = header;

    let actualLinkBox = document.querySelector('.links-container');

    for (let newsItem of newsList) { 
        let title = newsItem.title;
        let description = newsItem.description;

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `<a href="${newsItem.link}" class="actual-link"> <p class="link-title"> ${title} </p> 
        <p class="link-desctiption"> ${description} </p> </a>`;

        actualLinkBox.insertAdjacentElement("beforeend", newDiv);
    }; 
}