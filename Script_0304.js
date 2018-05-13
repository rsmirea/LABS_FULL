function Calculator() { this.read = function() {this.a = +prompt('a?', 0);
this.b = +prompt('b?', 0);};
this.sum = function() {return this.a + this.b;};
this.mul = function() {return this.a * this.b;};
}
var MyCalc = new Calculator();
calculator.read();
alert("Сумма="+MyCalc.sum());
alert("Произведение="+MyCalc.mul());
