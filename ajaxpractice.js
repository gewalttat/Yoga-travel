let inputRub = document.getElementById('rub'),
inputUsd = document.getElementById('usd');
inputRub.addEventListener('input', () => {
let request = new XMLHttpRequest();
//request.open(method, url, async, login, pass);
request.open('GET', 'yoga/corrent.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

});