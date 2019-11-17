/**
 * Reflect.constructor(target, args)
 * 该方法等同于new target(...args),
 * 这提供了一种不使用new,来构造函数的方法
 */

function Greeting(name) {
  this.name = name;
}

// 旧写法
const instance = new Greeting('张三');

// reflect 写法
const instance2 = Reflect.construct(Greeting, ['张三']);

// 如果第一个参数不是函数，会报错
