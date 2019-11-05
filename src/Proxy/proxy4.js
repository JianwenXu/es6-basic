// Proxy 实例也可以作为其他对象的原型对象

var target = {};

var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

let obj = Object.create(proxy);

console.log(obj.time); // 35

console.log(obj.__proto__ === target); // false
console.log(obj.__proto__ === proxy); // false ??
