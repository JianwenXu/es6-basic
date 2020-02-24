let s = Symbol(); // 没有 new

console.log('测试 s 类型', typeof s); // symbol

let s1 = Symbol('foo'); // 用于对这个变量进行描述
let s2 = Symbol('bar');

console.log(s1.toString()); // Symbol(foo)
console.log(s2.toString()); // Symbol(bar)

// 用于描述的变量可以是对象，这个时候会调用该对象的 toString 方法，将其转化为字符串之后，然后才生成一个 Symbol 值
let obj = {
	toString: () => {
		return 'abc';
	}
};
let s3 = Symbol(obj);

console.log('s3: ', s3.toString()); // Symbol(abc)

// Symbol 参数只是对 Symbol 的描述，相同参数的 Symbol 返回值是不相等的
let s01 = Symbol();
let s02 = Symbol();
console.log(s01 === s02); // false

let s03 = Symbol('abc');
let s04 = Symbol('abc');
console.log(s03 === s04); // false

// Symbol 值不能与其他类型的值做运算，否则会报错
// 'test' + s01; // 报错
// `test ${s01}` // 报错

// Symbol 可以显式的转化为字符串

console.log(s03.toString());
console.log(String(s03));

// Symbol 可以转化为布尔值
console.log(!s01); // false
console.log(Boolean(s01)); // true

// Symbol 不能转化为数字
// Number(s01); // 报错
1 + s01; // 报错
