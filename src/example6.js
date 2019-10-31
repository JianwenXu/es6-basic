/**
 * 调用 resolve 或 reject 并不会终结 Promise 的参数函数的执行
 *
 * 一般来说，调用resolve或reject以后，Promise 的使命就完成了，
 * 后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
 * 所以，最好在它们前面加上return语句，这样就不会有意外。
 *
 */

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});

// 2
// 1


new Promise((resolve, reject) => {
  return resolve(11);
  console.log(22); // 这一句不会执行
}).then(v => {
  console.log(v);
});

// 1
