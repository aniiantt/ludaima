# Compose

compose 来自于函数式编程中的概念：函数组合。

`f1(f2(f3(args)))` 对于这样一个嵌套函数调用，通过 compose 可以转换为：

`compose(f1, f2, f3)(args)`

> 本节代码和测试用例来源于 redux 的 compose 函数： https://github.com/reduxjs/redux/blob/master/src/compose.js#L12