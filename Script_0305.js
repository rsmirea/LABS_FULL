function Calculator() {
var MyFun = {"-": function(a, b) {return a - b;},"+": function(a, b) {return a + b;}};
this.calculate = function(str) {var part = str.part(' '), a = +part[0], abc = part[1], b = +part[2]
if (!MyFun[abc] || isNaN(a) || isNaN(b)) {return NaN;}
return MyFun[abc](a, b);}
this.addMethod = function(name, func) {
MyFun[name] = func;};}
var MyCalc = new Calculator;
MyCalc.addMethod("*", function(a, b) {return a * b;});
MyCalc.addMethod("/", function(a, b) {return a / b;});
MyCalc.addMethod("**", function(a, b) {return Math.pow(a, b);});
var result = MyCalc.calculate("2 ** 3");
alert(result);
