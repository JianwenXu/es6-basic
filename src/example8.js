/**
 * Promise 会吃掉错误
 *
 * Promise 内部发生错误了但是不会影响外部代码，后续代码继续执行
 */

const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    resolve(x + 2);
  });
};

someAsyncThing().then(() => {
  console.log('everything is great');
});

setTimeout(() => {
  console.log('123');
}, 2000);

// Uncaught (in promise) ReferenceError: x is not defined
// 123
