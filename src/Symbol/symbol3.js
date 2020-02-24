// Symbol 作为属性名，遍历对象的时候，
// 该属性不会出现在：for...in、for...of 循环中
// 也不会被 Object.keys(), Object.getOwnPropertyName(), JSON.Stringify() 返回

// 但是它也不是私有属性，有一个Object.getOwnPropertySymbols() 可以获得指定对象所有的 Symbol 属性名
// 该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值

const obj = {};
const s1 = Symbol('s1');
const s2 = Symbol('s2');
obj[s1] = 'a';
obj[s2] = 'b';
const sArray = Object.getOwnPropertySymbols(obj);
console.log(sArray); // [ Symbol(s1), Symbol(s2) ]

console.log('以下是 for...in 遍历');

// 无输出
for(k in obj) {
	console.log(k);
}

const pArray = Object.getOwnPropertyNames(obj);
console.log(pArray); // []

// Reflect.ownKeys 可以返回所有类型的键名，包括常规键名和 Symbol 类型
obj.s1 = 1;
obj.s2 = 2;
const aArray = Reflect.ownKeys(obj);
console.log(aArray); // ["s1", "s2", Symbol(s1), Symbol(s2)]

// 由于以 Symbol 值作为键名，不会被常规方法遍历得到。
// 我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。

