/**
 * 如果 Promise 状态已经变成 resolved ，再抛出错误是无效的
 */

const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');
});

promise
  .then((value) => { console.log(value); })
  .catch((err) => { console.error(err); });

// ok
