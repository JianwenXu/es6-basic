function idMaker() {
  var index = 0;
  return {
    next: function() {
      return { value: index++, done: false };
    }
  };
}

var it = idMaker();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
