function exchangeWith(a, b) {
  var temp = a;
  var a = b;
  var b = temp;
  return [a.reverse(), b.reverse()];
}


console.log(exchangeWith(["a", "b", "c"], [1, 2, 3]));
