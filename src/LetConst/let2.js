/**
 * for循环的计数器，就很适合使用let
 * 计数器只在循环内部有效，在循环体外引用会报错
 */

// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 10

// 当前的i只在本轮循环有效
// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[4](); // 4
// a[7](); // 7

// 闭包
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

