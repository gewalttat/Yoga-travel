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