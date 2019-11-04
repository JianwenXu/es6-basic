Generate 函数的语法

Generate函数有多重理解角度，语法上首先可以把它理解为，Generate函数是一个状态机。封装了多个内部状态。

执行Generate函数会返回一个遍历器对象，也就是说，Generate 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generate函数内部的每一个状态。

形式上，Generate 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个型号；二是，函数体内部使用yield表达式，定义不同的内部状态。

Generate 函数的执行也是用一对圆括号，但是调用它之后，函数并不立即执行，而是返回一个指向内部状态的指针对象，也就是Iterator对象

一般的Generate对象是 function* foo(x, y) {},但是其他写法也能编译通过

遍历器对象的next方法的运行逻辑如下。

（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

Generate 函数可以不用 yield表达式，这时他就变成了一个单纯的暂缓执行函数

由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。

Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。

注意：
1.yield 表达式只能用在Generate 函数里面，用在其他地方都会报错
  yield 表达式如果放在别的表达式中，必须用圆括号包起来
  yield 表达式如果放在赋值表达式的右边或者是用作其他函数的参数，可以不加圆括号




Generate 函数的异步应用
