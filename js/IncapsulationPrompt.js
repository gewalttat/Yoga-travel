
function User (name, age) {
this.name = name;
let userAge = age;
this.getAge = ()=> {
    return userAge;
};
this.getName = ()=> {
    return name;
};
this.setAge = (age) => {
if (age != '' && age < 0 && age > 115 && age === 'number'){
   userAge = age;
}
};

this.say = function() {
    console.log(`имя пользователя ${this.name}, возраст ${this.userAge}`);
};
}

let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say();