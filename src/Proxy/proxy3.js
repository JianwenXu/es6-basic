// 如果handler没有设置任何拦截，那就等同于直接通向原对象。

var target = {};
var handler = {};
var proxy = new Proxy(target, handler);
proxy.a = 'a';
target.b = 'b';

console.log(`proxy `, proxy); // { a: a, b: b }
console.log(`target `, target); // { a: a, b: b }
