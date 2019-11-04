// 下面表达式会报错
// (function() {
//   yield 1;
// })();


// 下面表达式也会报错，因为forEach 方法的参数，是一个普通函数
// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   a.forEach(function(item) {
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   });
// }

// for(var f of flat(arr)) {
//   console.log(f);
// }


// 以上代码的解决办法是使用for循环
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  for(var i = 0, len = a.length; i < len; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for(var f of flat(arr)) {
  console.log(f);
}

