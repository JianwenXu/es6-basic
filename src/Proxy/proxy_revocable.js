/**
 * Proxy.revocable()
 * 该方法返回一个可取消的Proxy 实例
 */

let target = {};
let handler = {};

let { proxy, revoke } = Proxy.revocable(target, handler);

proxy.foo = 123;
console.log(proxy.foo);

revoke();
console.log(proxy.foo);

/**
 * 该方法的一个使用场景是
 * 目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问
 */
