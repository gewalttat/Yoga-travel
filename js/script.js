window.addEventListener ('DOMContentLoaded', function() {

    'use strict';
    //получение переменных 
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

//функция прячет весь контент, кроме первого div
    function hideTabContent(a) {
for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
}
    }
    hideTabContent(1);


    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //переключение между контентом, завязанное на клик. переход между контентом включает стили класса .info-header-tab
    info.addEventListener('click', function(event) {
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
    //таймер события на сайте (указан по дате выполнения задания)
    var deadline = "August 02 2019 00:00:00 GMT+0300";
//получает на вход endtime, который в свою очередь принимает deadline для updateClock¯\_(ツ)_/¯
function getTimeRemainding (endtime) {
   //СЛОЖНЕЙШЕЙ ФОРМУЛОЙ СЧИТАЕТ СКОЛЬКО В МС секунд, минут, часов
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    //собственно возвращает ^
return {
    'total' : t,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
};
}

//создает переменные, забирая их со страницы по querySelector
function setClock(id, endtime) {
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
}
}
//вызов функции с id timer и дедлайном
setClock('timer', deadline);
});