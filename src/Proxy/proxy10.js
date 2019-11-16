/**
 * get 方法的第三个参数
 */
const proxy = new Proxy({}, {
  get: function(target, property, receiver) {
    return receiver;
  }
});

console.log(proxy.getReceiver === proxy); // true

const d = Object.create(proxy);
console.log(d.a === d); // true

/**
 * 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。 ??
 */

const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  }
});

const handler = {
  get(target, propKey) {
    // 没有这个if判断会报错
    if (propKey === 'foo') {
      return target[propKey];
    }
    return 'abc';
  }
};

const p = new Proxy(target, handler);

console.log(target.foo); // 123
console.log(p.foo);
