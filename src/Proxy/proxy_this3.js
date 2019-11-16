/**
 * 有些原生对象的内部属性，只有通过正确的this才能拿到，
 * 所以Proxy也无法代理这些原生对象的属性
 */
const target = new Date();
const handler = {};
const proxy = new Proxy(target, handler);

console.log(proxy.getDate); // function
console.log(proxy.getDate()); // 报错 this is not a Date Object ??
