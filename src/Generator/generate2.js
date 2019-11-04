function* f() {
  console.log('执行了');
}

var generate = f();

setTimeout(() => {
  generate.next();
}, 5000);
