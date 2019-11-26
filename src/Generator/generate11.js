/**
 * 通过设置对象的Symbol.iterator 属性遍历对象
 */

function* objectEntries() {
  let propKeys = Object.keys(this);
  for(let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

for(let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}
