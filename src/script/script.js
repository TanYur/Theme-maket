//sticker
window.onscroll = function () {
    scrollnavbar();
};
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function scrollnavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//menu
let menuElem = document.getElementById('menu-mob');
let titleElem = document.querySelector('.menu-m');

titleElem.onclick = function () {
    menuElem.classList.toggle('menu-visible');
};

//disappear menu
document.querySelector('.maket').addEventListener('click', e => {
    let target = e.target;
    const classNames = ['them__item', 'theme-btn', 'menu-mob__link',]
    if (target.classList.contains('them__item')
        || target.classList.contains('theme-btn')
        || target.classList.contains('menu-mob__link__item')
        || target.classList.contains('menu-m')) {
        themeElem;
    } else {
        themeElem.forEach(i => i.classList.remove('theme-switch__active'));
        menuElem.classList.remove('menu-visible');
    }
});

//slider

let btnBookmarks = document.querySelectorAll('.btn-bookmark');
let tabTitle = document.querySelector('.slider-content .subtitle');
let tabContent = document.querySelector('.content-text');
let tabImg = document.querySelector('.slider-img img');
let dataSliderTab = {
    tabTibles: [
        '<span>tabs</span> with soft transitiog effect.',
        '<span>tabs</span> title numer 2.',
        '<span>tabs</span> title numer 3.'
    ],
    tabContents: [
        '<p>1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, eligendi totam. Id, nulla exercitationem accusantium at unde quidem ducimus, nobis nesciunt reiciendis necessitatibus esse perspiciatis eius?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae modi nventore? </p>',
        '<p>2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, eligendi totam. Id, nulla exercitationem accusantium at unde quidem ducimus, nobis nesciunt reiciendis necessitatibus esse perspiciatis eius?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae modi nventore? </p>',
        '<p>3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, eligendi totam. Id, nulla exercitationem accusantium at unde quidem ducimus, nobis nesciunt reiciendis necessitatibus esse perspiciatis eius?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae modi nventore? </p>'
    ],
    tabImgs: [
        "../src/img/city_01.png",
        "../src/img/city_02.jpg",
        "../src/img/city_04.jpg"
    ]
};

let btnBookmark = btnBookmarks.forEach((el, index) => {
    el.addEventListener('click', function (e) {
        let btnNumberTab = e.target.textContent.match(/[0-9]/g).join``;

        if (el.classList.contains('btn-bookmark-active')) {
            el
        } else {
            btnBookmarks.forEach(j => j.classList.remove('btn-bookmark-active'));
            el.classList.add('btn-bookmark-active');
            tabTitle.innerHTML = dataSliderTab.tabTibles[index];
            tabContent.innerHTML = dataSliderTab.tabContents[index];
            tabImg.setAttribute('Src', dataSliderTab.tabImgs[index])
        }
    })
});

//pricing

let cardMarks = document.querySelectorAll('.pricing .block-card .card');
let cards = document.querySelectorAll('.block-card .card .card-marks');

cardMarks.forEach((el, index) => {
    let marker = 0;
    let mark = 0;

    el.addEventListener('mouseover', (e) => {
        let item = el.querySelector('.card-marks');

        if (item.classList.contains('card-marks-active')) {
            marker = 2;
        } else {
            item.classList.add('card-marks-active');
            mark = 1;
        };
    })

    el.addEventListener('pointerleave', (e) => {
        let item = el.querySelector('.card-marks');

        if (marker == 2 && mark == 0) {
            marker = 0;
            mark = 0;
        } else {
            item.classList.remove('card-marks-active');
            marker = 0;
        }
    })

    el.addEventListener('click', function (e) {
        let item = el.querySelector('.card-marks');
        if (item.classList.contains('card-marks-active') || (mark == 1 && marker == 2)) {
            marker = 0;
            mark = 0;
            cards.forEach(j => {
                j.classList.remove('card-marks-active');
            });
            item.classList.add('card-marks-active');
        }
    });
})

//theme

const btnTheme = document.querySelectorAll('.theme-btn');
const theme = document.querySelector('.maket');
const themeMenu = document.querySelectorAll('.theme-switch');

const dataTheme = {
  'dark': 'theme-dark',
  'light': 'theme',
  'green': 'theme-green',
  'orange': 'theme-orange',
  'red': 'theme-red',
  'ais lemon': 'theme-lemon',
  'blue fire': 'theme-blue-fire',
  'fire-song': 'theme-fire-song',
  'opal': 'theme-opal',
}

//menu
let themeElem = document.querySelectorAll('.theme-switch');

btnTheme.forEach(j => {
  j.onclick = function () {
    themeElem.forEach(i => i.classList.toggle('theme-switch__active'));
  }
});


themeMenu.forEach(j => {
  j.addEventListener('click', e => {
    delete localStorage.choiseTheme;   
    let currentTheme = [...theme.classList].filter(i => i.includes('theme')).join``;    
    let choiseTheme = e.target.innerHTML; 
    if (Object.keys(dataTheme).includes(choiseTheme)) {
      theme.classList.remove(currentTheme);
      theme.classList.add(dataTheme[choiseTheme]);
      localStorage.setItem('choiseTheme', dataTheme[choiseTheme]);      
    }
  })
});

//save preferr theme
let preferrTheme = localStorage.getItem('choiseTheme');

if (localStorage.getItem('choiseTheme') !== undefined) {
  theme.classList.remove('theme');
  theme.classList.add(preferrTheme);
};

if(theme.classList.contains('null')){
    theme.classList.remove('null');
    theme.classList.add('theme');
}
