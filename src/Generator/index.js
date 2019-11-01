function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

// hw.next();

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
