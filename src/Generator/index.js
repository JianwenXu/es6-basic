/**
 * 除了for...of循环以外，扩展运算符，解构赋值和Array.form方法内部调用的也是遍历器接口
 *
 * 注意：
 * 1.下面那些必须使用number() 直接使用n 取不到值
 *
 */

function* number() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}

var n = number();

console.log(n.next()); // { value: 1, done: false }
console.log(n.next()); // { value: 2, done: false }
console.log(n.next()); // { value: 3, done: true }
console.log(n.next()); // { value: undefined, done: true }
console.log(n.next()); // { value: undefined, done: true }
console.log(n.next()); // { value: undefined, done: true }

console.log([...number()]); // [ 1, 2 ]

console.log(Array.from(number())); // [ 1, 2 ]

let [ x, y ] = number();
console.log(x, y);

for(let num of number()) {
  console.log(num);
}



