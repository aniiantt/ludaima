export default function memoizeOne(func, compareFunc = (a, b) => a === b) {
  let lastArgs = [];
  let lastThis;
  let lastResult;
  let calledOnce = false;
  const isNewArgCompare = (val, index) => compareFunc(val, lastArgs[index])
  return function(...args) {
    if (calledOnce && lastThis === this && args.length === lastArgs.length && args.every(isNewArgCompare)) {
      return lastResult;
    }
    lastResult = func.apply(this, args);
    calledOnce = true;
    lastThis = this
    lastArgs = args
    return lastResult;
  };
}
