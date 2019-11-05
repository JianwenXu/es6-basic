// for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，
// 且此时不再需要调用next方法。

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  return 8;
}

for(let f of foo()) {
  console.log(f); // 1, 2, 3, 4, 5, 6, 7
}

// 这里需要注意，一旦next方法的返回对象的done属性为true，
// for...of循环就会中止，且不包含该返回对象，
// 所以上面代码的return语句返回的8，不包括在for...of循环之中。


// 下面是一个利用Generator 函数和for...of 循环，
// 实现斐波那契数列的例子

function* fibonacci() {
  let [ prev, curr ] = [ 0, 1 ];
  for(;;) {
    yield curr;
    [prev, curr] = [ curr, prev + curr ];
  }
}

for(let n of fibonacci()) {
  if (n > 1000) {
    break;
  }
  console.log(n);
}
