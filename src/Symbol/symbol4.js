// Symbol.for() 登记机制
console.log(Symbol.for('s1') === Symbol.for('s1')) // true
console.log(Symbol('s1') === Symbol('s1')); // false

// Symbol.keyFor() 返回一个已经登记的 Symbol 类型值的 key
let s1 = Symbol.for('a1');
let s2 = Symbol('a2');
console.log(Symbol.keyFor(s1)); // a1
console.log(Symbol.keyFor(s2)); // undefined

// Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。
function foo() {
  return Symbol.for('bar');
}

const x = foo();
const y = Symbol.for('bar');
console.log(x === y); // true

// Symbol.for()的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值。
// iframe 生成的 Symbol 值可以在主页面取到

// 用 Symbol 实现模块的单例模式

