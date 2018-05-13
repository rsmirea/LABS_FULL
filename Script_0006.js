var input = prompt(input,'Введите значение');

if(input == 'Админ') {
var input2 = prompt(input2,'Введите пароль');

if(input2 == 'Чёрный Властелин') {
alert('Добро пожаловать!');
} else {
if(input2 == null) {
alert('Вход отменён');
} else { 
alert('Пароль неверен');
}
}
} else {
if(input == null) {
alert('Вход отменён');
} else { 
alert('Я вас не знаю');
}
} 

