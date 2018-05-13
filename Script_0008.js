var login = prompt('Введите имя','');

var message = (login == 'Вася') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина':
'';

alert(message);
