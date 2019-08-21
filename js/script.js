window.addEventListener ('DOMContentLoaded', function() {

    'use strict';
    let calc = require('./parts/calc.js'),
    frame = require('./parts/frame.js'),
    slider = require('./parts/slider.js'),
    tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js');
    calc();
    frame();
    slider();
    tabs();
    timer();
});
    /*получение переменных 
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

//функция прячет весь контент, кроме первого div
    //function hideTabContent(a) {
        let hideTabContent = (a) => { //ES6
for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
}
    };
    hideTabContent(1);

//function showTabContent(b) {
    let showTabContent = (b) => { //ES6
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    //переключение между контентом, завязанное на клик. переход между контентом включает стили класса .info-header-tab
    //ПЕРЕПИСАТЬ С JQUERY-HOVER, юзабилити ради.
    info.addEventListener('click', (event) => {
let target = event.target;
//если пользователь тыкает в кнопку класса info-header-tab, запускается переход между дивами
if (target && target.classList.contains('info-header-tab')) {
for (let i = 0; i < tab.length; i++) {
    if(target==tab[i]) {
        hideTabContent(0);
        showTabContent(i);
        break;
    }
}
}
    });
    //таймер события установлен в сутки потому что так прикольней
    let deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
//получает на вход endtime, который в свою очередь принимает deadline для updateClock¯\_(ツ)_/¯
//function getTimeRemainding (endtime) {
    let getTimeRemainding = (endtime) => { //ES6
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    //собственно возвращает ^
return {
    'total' : t,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
};
};

//создает переменные, забирая их со страницы по querySelector
//function setClock(id, endtime) {
    let setClock = (id, endtime) => {
let timer = document.getElementById(id),
hours = timer.querySelector('.hours'),
minutes = timer.querySelector('.minutes'),
seconds = timer.querySelector('.seconds'),
//задает интервал обновления updateClock в секунду
timeInterval = setInterval(updateClock, 1000);

//получает разницу через getTimeRemaining 
//ловит данные из t и передает в верстку
function updateClock(){
let t = getTimeRemainding(endtime);
hours.textContent = t.hours;
if (t.hours < 10) {
    hours.textContent = '0'+t.hours;
} 
minutes.textContent = t.minutes;
if (t.minutes < 10) {
    minutes.textContent = '0'+t.minutes;
} 
seconds.textContent = t.seconds;
if (t.seconds < 10) {
    seconds.textContent = '0'+t.seconds;
} 
//стопит таймер, если цифры <= 0.
if (t.total <= 0) {
clearInterval(timeInterval);
}
if (t.hours <= 0 && t.minutes < 30) {
    document.getElementById('timer').style.color = "red";
}
}
};
//вызов функции с id timer и дедлайном
setClock('timer', deadline);

//всплывающее окно
//получение переменных по селекторам
let more = document.querySelector('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');
//ПОПРОБОВАТЬ НАПИСАТЬ С JQUERY ПО ПРИМЕРУ ДЗ
//раскрытие окна, блокировка бэкграунда
more.addEventListener('click', function(){
overlay.style.display = 'block';
this.classList.add('more-splash');
document.body.style.overflow = 'hidden';
});
//функция закрытия окна
close.addEventListener('click', () => {
overlay.style.display = 'none';
more.classList.remove('move-splash');
document.body.style.overflow = 'hidden';
});

//форма отправки
//объект с оповещениями обратной связи с пользователем при отправке формы
let message = {
    loading: 'Идёт загрузка...',
    success: 'Спасибо за заявку! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так'
    };
    //получение переменных
    let mainForm = document.querySelector('.main-form'),
    form = document.querySelector('#form'),
    input = form.getElementsByTagName('input'),
    popupForm = document.querySelector('.popup-form'),
    contactForm = document.querySelector('.contact-form'),
    
    statusMessage = document.createElement('div');

    //привязка обработчика событий на форму
    form.addEventListener('submit', (event) => {
    //остановка стандартного поведения страницы (перезагрузки при клике сабмит)
        event.preventDefault();
    form.appendChild(statusMessage);
    //создание нового реквеста
    
    
    let request = new XMLHttpRequest();
request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);
    let obj = {};
    formData.forEach(function(value, key) {
    obj[key] =  value;
    });
    let json = JSON.stringify(obj);
    request.send(json);
   
//реализация запроса переписана на fetch, но всё равно не работает хз почему.
   let formData = new FormData(form);
   let obj = {};
    formData.forEach(function(value, key) {
    obj[key] =  value;
    });
   
   fetch('server.php', {
     method: 'POST', 
     body: JSON.stringify(obj), 
     headers:{
       'Content-Type': 'application/json'
     }
   }).then(res => console.log(res))
   .then(response => console.log('well done', JSON.stringify(response)))
   .catch(error => console.error('something wrong...', error));

    //очистка инпута (в инпуте останется только placeholder)
    for (let i = 0; i < input.length; i++){
        input[i].value = '';
    }
    });

    //слайдер
    let slideIndex = 1,
    //получение переменных со страницы для управления слайдом
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots'),
dots = document.querySelectorAll('.dot');
showSlides(slideIndex);
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    //запись аналогична закомментированному циклу
    //форич берет текущий айтем с массива и скрывает его 
    slides.forEach((item) => item.style.display = 'none');
    //for (let i = 0; i < slides.length; i++) {
      //  slides[i].style.display = 'none';
   // }

   //поведение слайдов (корректное переключение и зацикливание)
   dots.forEach((item) => item.classList.remove('dot-active'));
slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add('dot-active');
}
function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}

prev.addEventListener('click', function() {
plusSlides(-1);
});
next.addEventListener('click', () => {
    plusSlides(1);
});
//корректное отображение точек слайдов
dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
    currentSlide(i);
}
    }
});

//калькулятор расчета суммы отдыха
//получение данных со страницы
//установка дефолтных значений = 0
let persons = document.querySelectorAll('.counter-block-input') [0],
restDays = document.querySelectorAll('.counter-block-input') [1],
place = document.getElementById('select'),
totalValue = document.getElementById('total'),
personsSum = 0,
daysSum = 0,
total = 0;

totalValue.innerHTML = 0;

//поведение для инпута с количеством людей
persons.addEventListener('change', function() {
personsSum = +this.value;
total = (daysSum + personsSum)+4000;

if (persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {
    totalValue.innerHTML = 0;
} else {
   totalValue.innerHTML = total; 
}
for (let i = 0; i < persons.length; i++){
    persons[i].value = '';
}
});
//поведение для инпута с количеством дней
restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum)+4000;
    
    if ((persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0')) {
        totalValue.innerHTML = 0;
    } else {
       totalValue.innerHTML = total; 
    }
    for (let i = 0; i < restDays.length; i++){
        restDays[i].value = '';
    }
});
//коэффициент для разных курортов
place.addEventListener('change', function() {
    if(restDays.value == '0' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});
});
*/