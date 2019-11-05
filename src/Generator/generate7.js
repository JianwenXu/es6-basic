function* dataConsumer() {
  console.log('Started');
  console.log(`1.${yield}`);
  console.log(`2.${yield}`);
  return 'result';
}

let genObj = dataConsumer();
genObj.next(); // started
genObj.next('a'); // 1.a
genObj.next('b'); // 2.b
