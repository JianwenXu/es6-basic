// ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。

// var proxy = new Proxy(target, handler);

// Proxy 对象的所有用法，都是上面这种形式，
// 不同的只是handler参数的写法。
// 其中，new Proxy()表示生成一个Proxy实例，
// target参数表示所要拦截的目标对象，
// handler参数也是一个对象，用来定制拦截行为。

// 第一个参数是所要代理的目标对象（上例是一个空对象），
// 即如果没有Proxy的介入，操作原来要访问的就是这个对象；
// 第二个参数是一个配置对象，对于每一个被代理的操作，
// 需要提供一个对应的处理函数，该函数将拦截对应的操作。

var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

console.log(proxy.time); // 35
console.log(proxy.name); // 35
console.log(proxy.title); // 35

// 注意：
// 要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，
// 而不是针对目标对象（上例是空对象）进行操作。
