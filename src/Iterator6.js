// 类数组对象直接调用数组的Symbol.iterator

// 类数组：
// 存在数值键名和length属性

let iterator = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for(let item of iterator) {
  console.log(item); // a, b, c
}

// 普通对象部署数组的Symbol.iterator方法，并无效果

let iterator2 = {
  a: 'a',
  b: 'b',
  c: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for(let item of iterator2) {
  console.log(item); // undefined * 3
}
