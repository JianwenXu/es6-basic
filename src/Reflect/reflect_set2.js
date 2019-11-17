/**
 * 如果Name属性设置了赋值函数，则赋值函数的this绑定receiver
 */

var myObject = {
  foo: 4,
  set bar(value) {
    return this.foo = value;
  }
};

var myReceiverObject = {
  foo: 0
};

Reflect.set(myObject, 'bar', 1, myReceiverObject);

console.log(myObject.foo); // 4
console.log(myReceiverObject.foo); // 1
