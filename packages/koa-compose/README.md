# koa-compose

实现 koa 中间件加载的流程，如

```javascript
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms || 1));
}

const arr = [];

const a = async (context, next) => {
  arr.push(1);
  await wait(1);
  await next();
  await wait(1);
  arr.push(6);
};

const b = async (context, next) => {
  arr.push(2);
  await wait(1);
  await next();
  await wait(1);
  arr.push(5);
};

const c = async (context, next) => {
  arr.push(3);
  await wait(1);
  await next();
  await wait(1);
  arr.push(4);
};

compose([a, b, c])({});

// arr: [1, 2, 3, 4, 5]
```

来源：https://github.com/koajs/compose
