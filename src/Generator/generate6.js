function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
console.log(a.next()); // 6
console.log(a.next()); // NaN
console.log(a.next()); // NaN

var b = foo(5);
console.log(b.next()); // 6
console.log(b.next(12)); // 8
console.log(b.next(13)); // 42

// 注意，
// 由于next方法的参数表示上一个yield表达式的返回值，
// 所以在第一次使用next方法时，传递参数是无效的。
// V8 引擎直接忽略第一次使用next方法时的参数，
// 只有从第二次使用next方法开始，参数才是有效的。
// 从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。
