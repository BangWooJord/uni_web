
//Створити об’єкт «Користувач» з властивостями «ІД», «логін», «пароль».
let user = {
    id: 1,
    login: 'gamer1337',
    password: 'qwerty1234',
}
//Додати в прототип об’єкту «Користувач» метод «Показати дані»
let proto = {
    showData: function(){
        console.log(this.id + ' ' + this.login + ' ' + this.password)
    }
}
Object.setPrototypeOf(user, proto)

//Створити об’єкт «Адмін», що містить властивістю «тип» зі значенням «адмін» і методи:
//додати, видалити і змінити (написати реалізацію методів).
let admin = {
    type: 'admin',
    _add: function(){
        console.log('I`m an add method')
    },
    _remove: function(){
        console.log('I`m an remove method')
    },
    _change: function(){
        console.log('I`m an change method')
    }
}
//Реалізувати об’єднання властивостей і методів об’єктів «Користувач» і «Адмін».
let user_admin = {
    user,
    admin,
}

//Створити об’єкт «Користувач2», що наслідує властивості і методи об’єкту «Користувач»
// і має власну властивість «Адмін» зі значеннями true/false.
// Перевизначити в об’єкті «Користувач2» метод «Показати дані».
let user2 = {
    admin: true,
}
Object.setPrototypeOf(user2, user)
user2.showData = function() {
    console.log(this.id + ' ' + this.login + ' ' + this.password + ' User 2')
}

//Реалізувати класи «Користувач» і «Адмін» з такими же методами і властивостями як і
// попередні об’єкти. «Адмін» наслідує методи та властивості від «Користувач».
// При реалізації використовувати геттери і сеттери, наприклад, для перевірки даних чи
// виведення в різних виглядах інформацію.
class User {
    constructor(_id, _login, _pswd) {
        this.id = _id
        this.login = _login
        this.password = _pswd
    }
    get id(){
        return this._Id
    }
    set id(val){
        if(val < 0) console.log('Id cannot be less than 0')
        else this._Id = val
    }

    showData(){
        console.log(this.id + ' ' + this.login + ' ' + this.password + ' class')
    }
}

class Admin extends User{
    constructor(_id, _login, _pswd) {
        super();
        this.admin = true
    }
    showData() {
        console.log(this.id + ' ' + this.login + ' ' + this.password + ' Admin class')
    }
}