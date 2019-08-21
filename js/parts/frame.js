function frame() {
let more = document.querySelector('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');
more.addEventListener('click', function(){
overlay.style.display = 'block';
this.classList.add('more-splash');
document.body.style.overflow = 'hidden';
});
close.addEventListener('click', () => {
overlay.style.display = 'none';
more.classList.remove('move-splash');
document.body.style.overflow = 'hidden';
});

let message = {
    loading: 'Идёт загрузка...',
    success: 'Спасибо за заявку! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так'
    };
    let mainForm = document.querySelector('.main-form'),
    form = document.querySelector('#form'),
    input = form.getElementsByTagName('input'),
    popupForm = document.querySelector('.popup-form'),
    contactForm = document.querySelector('.contact-form'),
    
    statusMessage = document.createElement('div');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    form.appendChild(statusMessage);
    /*
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
    */
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

    for (let i = 0; i < input.length; i++){
        input[i].value = '';
    }
    });
}
module.exports = frame;