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
    console.log('---click---')

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
    console.log(leftOffset)
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

    if (activeDotIndex<dots.length-1) {
        activeDotIndex++;
    }
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
        let btnLang = langBtns[i].id;

        for (let j = 0; j < langBtns.length; j++) {
                langBtns[j].classList.remove('lang-active');
        }

        if (btnLang != currentLang) {
            html[0].setAttribute("lang", btnLang);
            langBtns[i].classList.add('lang-active');
            addText(language[btnLang]);
        }  
    });
};


//привязка текста//

function addText(language){
    addBtnsText(language.btns);
    addHeaderText(language.mainHeader);
    addNavText(language.navigation);
    addAsideText(language.asideHeader, language.asideNews);
    addMainNews(language.mainNews);
    addAdditionalNewsText(language.newsItem, language.adInfHeader);
    addFooterText(language.footer, language.contacts) //not yet//
    addContacts(language.contacts)
};

function addBtnsText(btns) {
    let btnAbout = document.querySelector('.solid-btn');
    btnAbout.innerHTML = btns.about;

    let btnArchive = document.querySelector('.bordered-btn');
    btnArchive.innerHTML = btns.archive;
};

function addHeaderText(header) {
    let mainHeader = document.querySelector('.mainHeader');
    mainHeader.innerHTML = header;
}

function addNavText(nav) {  
    let navContainer = document.querySelector('.main-nav');
    let row = '';

    for (let item of nav) {
        row += `<li> <a href="${item.link}"> ${item.name} </a> </li>`;
    }

    navContainer.innerHTML = row;
}

function addAsideText(header, asideNewsList) {
    let asideHeader = document.querySelector('.asideHeader');
    asideHeader.innerHTML = header;

    let asideNewsContainer = document.querySelector('.news-list');

    let row = '';

    for (let asideNews of asideNewsList) {
        row += `<div class="news-item"><a href="${asideNews.link}"><p>${asideNews.title}</p><small>${asideNews.date}</small></a></div>`
    }
    asideNewsContainer.innerHTML = row;
}

function addMainNews (news, btns){
    let newsContainer = document.querySelector('.carousel-news');
    let row = '';

    for (let item of news) {
        row += `<div class="main-news-item"><img src="${item.img}" class="main-news-img" alt="${item.imgAlt}"><div class="main-news-right-column"><div class="main-news-text"><h4>${item.title}</h4><p class="teaser">${item.preview}</p></div></div></div>`
    }
    newsContainer.innerHTML = row;
}

function addAdditionalNewsText(newsList, adInfHeader) {
    let adHeaderContainer = document.querySelector('.addInfHeader');
    adHeaderContainer.innerHTML = adInfHeader;

    let actualLinkBox = document.querySelector('.links-container');
    let row = '';

    for (let newsItem of newsList) { 
        row += `<a href="${newsItem.link}" class="actual-link"> <p class="link-title"> ${newsItem.title} </p> 
        <p class="link-desctiption"> ${newsItem.description} </p> </a>`;
    }
    actualLinkBox.innerHTML = row;
}; 

function addContacts(contacts) {
    let data = language.contacts; 
    let phoneContainer = document.querySelector('.header-phone');

    let row = `${contacts.phone}<a href="tel: #">${data.phoneNumber}</a>`
    phoneContainer.innerHTML = row;
}

function addFooterText(footer, contacts) {
    let stampContainert = document.querySelector('.stamp');
    let stampData = footer.stamp

    let row = `<img src="${stampData.img}" class="paw" alt="${stampData.alt}">${stampData.text}`;
    stampContainert.innerHTML = row;

    let contactsContainer  = document.querySelector('.contacts');
    let data = language.contacts; 

    let footerText = `<ul> ${footer.text.contactsText}<li>${contacts.phone}<a href="tel: #">${data.phoneNumber}</a></li><li>${contacts.email}<a href="mailto: #"> ${data.emailAddress}</a></li> </ul>`;
    contactsContainer.innerHTML = footerText;

    let footerHeader = document.querySelector('.footer-text');
    footerHeader.innerHTML = footer.text.footerText;
}