/**
 * get 方法的实例
 * get 方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象，属性名和proxy实例本身，最后一个参数可选
 */

var person = {
  name: '张三'
};

var proxy = new Proxy(person, {
  get: function(target,property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError('Property "' + property +'" does not exist.');
    }
  }
});

console.log(proxy.name); // 张三
// console.log(proxy.age); // 报错

// get 方法可以继承

let proto = new Proxy({}, {
  get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
obj.foo; // 'GET foo'

// 使用get拦截实现数组读取负数索引

function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]); // c
