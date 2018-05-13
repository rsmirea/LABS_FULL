var calculator = {
sum: function() {return this.a + this.b;},
mul: function() {return this.a * this.b;},
read: function() {
this.a = +prompt('Значение a',0);
this.b = +prompt('Значение b',0);
}}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
