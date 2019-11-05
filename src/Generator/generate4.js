// 由于 Generator 函数就是遍历器生成函数，
// 因此可以把 Generator 赋值给对象的Symbol.iterator属性，
// 从而使得该对象具有 Iterator 接口。

var myIterable = {};

myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

console.log([...myIterable]); // [ 1, 2, 3, 4 ]

// Generator 函数执行后，返回一个遍历器对象。
// 该对象本身也具有Symbol.iterator属性，执行后返回自身。

function* gen() {}

var g = gen();

console.log(g[Symbol.iterator]() === g); // true
