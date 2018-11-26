# classnames

React 中 className 是作为字符串存在的，如果我们要操作多个类比较麻烦。classname 目的是让 React 中 className 更易于操作。

如：

```javascript
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// 扁平化
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

> 本节代码和测试用例来源于 JedWatson/classnames： https://github.com/JedWatson/classnames
