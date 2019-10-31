const p1 = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms, 'done 1');
});

const p11 = p1(500).then((value) => {
  console.log('测试 p1', value);
});

const p2 = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms, 'done 2');
});

const p21 = p2(200).then((value) => {
  console.log('测试 p2', value);
});

Promise.all([ p1, p2 ]).then((value) => {
  console.log('所有的都执行完了', value);
})
