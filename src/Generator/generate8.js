// 如果想要第一次调用next方法的时候，能够输入值，
// 可以在Generator函数外部再包一层

// ?? 不太懂

function wrapper(generatorFunction) {
  return function(...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE';
});

var g = wrapped();

g.next('hello!');
// g.next('hello!');
