const promise = new Promise(function(resolve, reject) {
  resolve('ok');
  setTimeout(function() {
    throw new Error('test');
  }, 0);
});

promise.then(function(value) {
  console.log(value);
});

setTimeout(() => {
  console.log(123);
}, 2000);

// ok
// Uncaught Error: test
