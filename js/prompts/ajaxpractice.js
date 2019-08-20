//код для простейшего асинхронного конвертера валют 
//вертки не будет, делалось с примера для понимания работы кода
let inputRub = document.getElementById('rub'),
inputUsd = document.getElementById('usd');
inputRub.addEventListener('input', () => {
let request = new XMLHttpRequest();
//request.open(method, url, async, login, pass);
request.open('GET', 'yoga/corrent.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();
//status
request.addEventListener('readystatechange', function(){
    if (request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.response);
        inputUsd = inputRub.value / data.usd;
    } else {
        alert('something wrong...');
    }
})
});