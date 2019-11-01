/**
 * resolve 函数的参数是另一个 Promise 实例
 * p1的状态决定p2的状态
 */

const p1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000);
});

const p2 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});

p2
  .then(result => console.log(result))
  .catch(err => console.error(err));

// Error：fail
