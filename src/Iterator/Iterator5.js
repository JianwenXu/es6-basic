// 通过遍历器实现指针结构

function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
  var current = this;
  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return { value: value, done: false }
    }
    return { done: true };
  }
  var iterator = { next };
  return iterator;
};

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for( var i of one) {
  console.log(i);
}
