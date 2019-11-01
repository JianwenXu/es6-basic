// 可以覆盖原生的 Symbol.iterator 方法，达到修改遍历器行为的目的

var str = new String('hi');

console.log([...str]); // [ 'h', 'i' ]

str[Symbol.iterator] = function() {
  return {
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};

console.log(str, [...str]); // 'hi', [ 'bye' ]
