//установка пары ключ-значение (то, чем оперирует ЛС)
localStorage.setItem('number', 1);

//получение данных из ЛС
localStorage.getItem('number');

//удаление ключа, значения, или пары
localStorage.removeItem('number');

//очищение лога памяти лс
localStorage.clear();


//функция сохранения данных пользователя при активном чекбоксе
window.addEventListener('DOMContentLoaded', function() {
//получение чекбокса со страницы
    let checkbox = document.getElementById('rememberMe'),
    change = document.getElementById('change'),
    form = document.getElementsByTagName('form')[0];

    //если чекбокс отмечен, то проверка лс проходит и данные запоминаются (визуально чекбокс отмечается галочкой)
    //при обновлении страницы чекбокс останется активным, т.к. в локале уже есть тру от чекбокса.
    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    };
    //кнопка смены вида формы. при тыке фон заливается голубым
if (localStorage.getItem('bg')==='changed') {
form.style.backgroundColor = 'lightblue';

}
//пара ключ-значение как проверка на то, был ли чекбокс отмечен
    checkbox.addEventListener('click', function() {
    localStorage.setItem('isChecked', true);
    });
//заброс в лс пары ключ значение для смены бэкграунда окна
    change.addEventListener('click', function() {
localStorage.setItem('bg', 'changed');
form.style.backgroundColor = 'red';
    });
});