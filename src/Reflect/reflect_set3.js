/**
 * 如果 Proxy对象和 Reflect对象联合使用，
 * 前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，
 * 那么Reflect.set会触发Proxy.defineProperty拦截。
 *
 * 如果Reflect.set没有传入receiver，
 * 那么就不会触发defineProperty拦截。
 *
 */

let p = {
  a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver)
    return true;
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// 打印 set defineProperty
