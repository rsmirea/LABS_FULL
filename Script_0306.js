var arr = [];

for (var i = 2; i < 100; i++) {
  arr[i] = true
}


var p = 2;
do {


  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

p = 2 * p + 1;

  p = i;
} while (p * p < 100);


var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}
alert(sum);
