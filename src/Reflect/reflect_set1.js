/**
 * set
 * Reflect.set(target, name, value, receiver)
 */

var myObject = {
  foo: 1,
  set bar(value) {
    return this.foo = value;
  }
};

console.log(myObject.foo); // 1

Reflect.set(myObject, 'foo', 2);
console.log(myObject.foo); // 2

Reflect.set(myObject, 'bar', 3);
console.log(myObject.foo); // 3
