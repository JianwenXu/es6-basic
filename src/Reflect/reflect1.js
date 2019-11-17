/**
 * Reflect 对象与Proxy 对象一样，也是ES6为了操作对象而提供的新API
 *
 * Reflect对象的设计目的有这样几个：
 * 1）将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
 * 2）修改某些Object 方法的返回结果，让其变得更合理
 * 3）让Object操作都变成函数行为
 * 4）Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect 对象上找到对应的方法，这就让Proxy对象可以方便的调用对应的Reflect方法，完成默认行为，作为修改行为的基础。
 *
 */
