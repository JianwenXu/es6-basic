// 内置的 Symbol 值（11个）

// Symbol.hasInstance
// 对象的Symbol.hasInstance属性，指向一个内部方法。
// 当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
// 比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
class MyClass {
	[Symbol.hasInstance](f) {
		return f instanceof Array;
	}
}
console.log([] instanceof new MyClass()); // true

// class Even {
// 	static [Symbol.hasInstance](n) {
// 		return Number(n) % 2 === 0;
// 	}
// }

// 这两种定义方式等价

const Even = {
	[Symbol.hasInstance](n) {
		return Number(n) % 2 === 0;
	}
}
console.log(1 instanceof Even); // false 
console.log(2 instanceof Even); // true
console.log(12345 instanceof Even); // false

// 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。

// 对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性。

// 对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。

// 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。

// 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。

// 对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。

// 对象的Symbol.iterator属性，指向该对象的默认遍历器方法。

// 对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。

// 对象的Symbol.toStringTag属性，指向一个方法。
// 在该对象上面调用Object.prototype.toString方法时，
// 如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
// 也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。

// 对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。


