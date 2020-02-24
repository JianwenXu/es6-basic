// 创建 Symbol 的时候可以添加一个描述

let s = Symbol('foo');

// 可以通过将 Symbol 转化为字符串读取这个描述
console.log(String(s)); // Symbol(foo)
console.log(s.toString()); // Symbol(foo)

// ES2019 添加了 Symbol.prototype.description 来读取这个描述
console.log(s.description); // foo

// 作为属性名的 Symbol
let s01 = Symbol('s01');
let s02 = Symbol('s02');
let s03 = Symbol('s03');
let a = {
	[s01]: 's01'
};
a[s02] = 's02';
Object.defineProperty(a, s03, { value: 's03' }); // 注意，这里写成这样！！回头查一下这个方法
console.log(a);
console.log(a[s01]); // s01
console.log(a[s02]); // s02
console.log(a[s03]); // s03

// Symbol 作为对象属性名的时候不能使用点运算符，因为点运算符后面总是字符串
// 同理, 在对象内部定义属性时，Symbol 值必须放在方括号里面
let s04 = Symbol('s04');
let a1 = {
	[s04]: function(n) {
		return n;
	}
}
a1[s04]('mingren');

// 增强写法
let s05 = Symbol('s05');
let a2 = {
	[s05](n) {
		return n;
	}
}
a2[s05]('xiaoying');

// Symbol 可以用于定义一组常量，保证这组常量值是不相等的
const log = {};
log.levels = {
	DEBUG: Symbol('debug'),
	INFO: Symbol('info'),
	WARN: Symbol('warn'),
};
console.log(log.levels.DEBUG, 'debug info ...');
console.log(log.levels.INFO, 'info ...');

// Symbol 作为属性名时该属性还是公开属性，不是私有属性

// Symbol 可以用于消除魔术字符串，用于 switch...case 场景
