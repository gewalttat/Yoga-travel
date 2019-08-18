//шпаргалка по геттерам и сеттерам
//рефакторинг предыдущего варианта с ЕS6
class User {
    constructor(name, age) {
        //назначение переменных
        this.name = name;
        let userAge = age;
        //геттеры для переменных
        this.getAge = function() {
            return userAge;
        };
        this.getName = function() {
            return name;
        };
        //сеттер возраста с проверкой правильности ввода
        this.setAge = (age) => {
            if (age > 0 && age < 115 && typeof age === 'number') {
                userAge = age;
            } else {
                console.log('недопустимое значение');
            }
        };
        //вызов лога введенных данных
        this.say = function () {
            console.log(`имя пользователя ${this.name}, возраст ${this.age}`);
        };
    }
}
//вызов функции
let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say();
//получение данных
console.log(user.getAge());
//оверрайд
user.setAge(30);
//получение переписанных данных
console.log(user.getAge());

//анонимная функция
//назначение переменной number
let number = 1;
//анонимная функция
(function(){
    //назначение переменной ВНУТРЬ функции
let number = 2;
console.log (number);
//оверрайд ВНУТРИ функции
return console.log(number + 3);
}());
//лог переменной объявленной вне функции
console.log(number);

//модуль
let mdl = (function(){
    //велосипедная инкапсуляция посредством отсутствия return
    //т.е. функция ничего не возвращает.
let private = function() {
    console.log('i am a private');
}; 
//ответ метода в функцию
// return {
//sayHello : function() {
  //  console.log('hello');
  let sayHello = () => {
      console.log('Hello!');
};
return {
    sayHello : sayHello
};
}());
console.log(crb);
console.log(crb.sayHello());