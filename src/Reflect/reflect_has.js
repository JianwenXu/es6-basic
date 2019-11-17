/**
 * Reflect.has(obj, name)
 * 该方法对应name in obj 里面的in 运算符
 */

var myObj = { foo: 1 };

console.log('foo' in myObj); // 旧写法 true
console.log(Reflect.has(myObj, 'foo')); // 新写法 true

/**
 * 如果 Reflect.has() 方法的第一个参数不是对象，会报错
 */

