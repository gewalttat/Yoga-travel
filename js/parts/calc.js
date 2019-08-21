function calc() {
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
}
module.exports = calc;