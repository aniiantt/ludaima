# typescript-awaiter

async await 是 es7 的标准，如果我们需要在 es6 中使用 async await 则需要做一些处理：

```javascript
async function asyncFuncA(plusNumber) {
  var a = await Promise.resolve(1);
  var b = plusNumber + a;
  var c = await Promise.resolve(3);
  return b + c;
}

async function asyncFuncB() {
  return await asyncFuncA(1000)
}

asyncFuncB();
```

这段代码用 tsc 会编译成：

```javascript
var __awaiter = ... // @TODO

function asyncFuncA(plusNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        var a = yield Promise.resolve(1);
        var b = plusNumber + a;
        var c = yield Promise.resolve(3);
        return b + c;
    });
}
function asyncFuncB() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield asyncFuncA(1000);
    });
}
asyncFuncB();
```

现在我们需要来试着实现一下 __awaiter 函数。