// 字符串是一个类似数组的对象，也原生的具有 Iterator 接口

var someString = 'hi';
console.log(typeof someString[Symbol.iterator]);

var iterator = someString[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
