/**
 * 如果name 属性部署了读取函数（getter）， 则读取函数的this绑定receiver
 */

var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo +this.bar;
  }
};

var myReceiverObject = {
  foo: 4,
  bar: 4
};

console.log(Reflect.get(myObject, 'foo')); // 1
console.log(Reflect.get(myObject, 'foo', myReceiverObject)); // 1
console.log(Reflect.get(myObject, 'bar')); // 2
console.log(Reflect.get(myObject, 'bar', myReceiverObject)); // 2
console.log(Reflect.get(myObject, 'baz', myReceiverObject)); // 8
