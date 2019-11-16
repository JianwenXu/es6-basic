/**
 * 利用Proxy可以将读取属性操作，转变为执行某个函数，从而实现属性的链式操作
 */

var pipe = (function() {
  return function(value) {
    var funcStack = [];
    var oproxy = new Proxy({}, {
      get: function(pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function(val, fn, index, array) {
            // console.log('fn', val, fn, index, array);
            return fn(val);
          }, value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      }
    });

    return oproxy;
  }
}());

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split('').reverse().join('') | 0;

console.log(pipe(3).double.pow.reverseInt.get);
// console.log(window.double)
