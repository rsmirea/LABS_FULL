function sum(a) {
  var CSUM = a;
  function f(b) {
    CSUM += b;
    return f;
  }
  f.toString = function() {
    return CSUM;
  };
  return f;
}
alert(sum(1)(2));
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));
