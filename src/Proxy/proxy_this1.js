/**
 * this问题
 *
 * 虽然 Proxy 可以代理针对目标对象的访问，
 * 但他不是目标对象的透明代理
 * 即不做任何拦截的情况下，也无法保证与目标对象的行为一致。
 * 主要原因就是在Proxy代理的情况下，目标对象内部this 关键字会指向Proxy代理
 */

const target = {
  m: function () {
    console.log(this === proxy);
  }
};

const handler = {};
const proxy = new Proxy(target, handler);

target.m(); // false
proxy.m(); // true

// 一旦proxy 代理target.m 后者内部的this就指向proxy，而不是target
