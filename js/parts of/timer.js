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