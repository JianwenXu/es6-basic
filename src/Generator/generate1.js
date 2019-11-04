function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next()); // { value: 'hello', done: false }
console.log(hw.next()); // { value: 'world', done: false }
console.log(hw.next()); // { value: 'ending', done: true }
console.log(hw.next()); // { value: undefined, done: true }

function* helloWorldGenerator2() {
  yield 'hello';
  yield 'world';
}

var hw2 = helloWorldGenerator2();

console.log(hw2.next()); // { value: 'hello', done: false }
console.log(hw2.next()); // { value: 'world', done: false }
console.log(hw2.next()); // { value: undefined, done: true }
console.log(hw2.next()); // { value: undefined, done: true }
