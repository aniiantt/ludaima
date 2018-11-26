export default function(resultFn, isEqual = (a, b) => a === b) {
  let lastThis;
  let lastArgs = [];
  let lastResult;
  let calledOnce = false;

  const isNewArgEqualToLast = (newArg, index) => isEqual(newArg, lastArgs[index]);

  const result = function(...newArgs) {
    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}
