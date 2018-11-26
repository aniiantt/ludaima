# memoize-one

记忆函数，但是只缓存最后一次调用的结果，以免内存泄漏

基本用法：

```javascript
import memoizeOne from 'memoize-one';

const add = (a, b) => a + b;
const memoizedAdd = memoizeOne(add);

memoizedAdd(1, 2); // 3

memoizedAdd(1, 2); // 3
// Add function is not executed: previous result is returned

memoizedAdd(2, 3); // 5
// Add function is called to get new value

memoizedAdd(2, 3); // 5
// Add function is not executed: previous result is returned

memoizedAdd(1, 2); // 3
// Add function is called to get new value.
// While this was previously cached,
// it is not the latest so the cached result is lost
```

可以传入自定义比较函数：

```javascript
import memoizeOne from 'memoize-one';
import deepEqual from 'lodash.isEqual';

const identity = x => x;

const defaultMemoization = memoizeOne(identity);
const customMemoization = memoizeOne(identity, deepEqual);

const result1 = defaultMemoization({ foo: 'bar' });
const result2 = defaultMemoization({ foo: 'bar' });

result1 === result2; // false - difference reference

const result3 = customMemoization({ foo: 'bar' });
const result4 = customMemoization({ foo: 'bar' });

result3 === result4; // true - arguments are deep equal
```

> 本节代码和测试用例来源于 alexreardon/memoize-one： https://github.com/alexreardon/memoize-one
