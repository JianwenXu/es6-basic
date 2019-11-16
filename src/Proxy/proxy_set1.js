/**
 * set 方法用来拦截某个属性的赋值操作。
 * 可以接受四个参数，
 * 一次为目标对象，属性名，属性值和Proxy实例本身
 * 其中最后一个参数可选
 *
 * 严格模式下，set 方法不返回true 报错
 */

// 可以用proxy set方法虽属性进行校验

let vaidator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not a integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // 对于蛮组条件的age属性以及其他属性，直接保存
    obj[prop] = value;
  }
};

let person = new Proxy({}, vaidator);

person.age = 100;
console.log(person.age); // 100

person.age = 'young'; // 报错
person.age= 300; // 报错

// set 方法还可以数据绑定，即每当对象发生变化时，会自动更新dom
