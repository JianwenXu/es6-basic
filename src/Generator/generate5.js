function* f() {
  for(var i = 0; true;) {
    var reset = yield i;
    if (reset) {
      i = -1;
    }
    i++;
  }
}

var g = f();

console.log(g.next()); // 0
console.log(g.next()); // 1
console.log(g.next(true)); // 0
console.log(g.next()); // 1
console.log(g.next()); // 2
console.log(g.next()); //3
console.log(g.next(true)); // 0
console.log(g.next()); // 1
