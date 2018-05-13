var MyArray = [];for (var i = 2; i < 100; i++) {MyArray[i] = true}
var p = 2;
do {for (i = 2 * p; i < 100; i += p) {
MyArray[i] = false;}
p = 2 * p + 1;
p = i;
} while (p * p < 100);
var MyRes = 0;
for (i = 0; i < MyArray.length; i++) {
if (MyArray[i]) {MyRes += i;}}
alert(MyRes);
