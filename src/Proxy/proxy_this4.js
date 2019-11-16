/**
 * this绑定原始对象，就可以解决上个demo的问题
 */

const target = new Date('2015-01-01');

const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.getDate());
console.log(target.getFullYear());
console.log(proxy.getFullYear()); // 报错



