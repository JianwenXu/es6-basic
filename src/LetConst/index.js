/**
 * 不存在变量提升
 */

/**
 * 暂时性死区
 *
 * 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
 */

// var tmp = 123;

// if (true) {
//   tmp = 456;
//   let tmp; // ?? 没反应 ？？
// }

/**
 * ES6 明确规定，
 * 如果区块中存在let和const命令，
 * 这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
 * 凡是在声明之前就使用这些变量，就会报错。
 */

/**
 * 总之，
 * 在代码块内，
 * 使用let命令声明变量之前，
 * 该变量都是不可用的。
 * 这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
 */

// TDZ 好像不生效呢
if (true) {
  // TDZ开始
  tmp = 'abc';
  console.log(tmp); // abc

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
