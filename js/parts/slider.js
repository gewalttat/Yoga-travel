function slider() {

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

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

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
}});
}
module.exports = slider;