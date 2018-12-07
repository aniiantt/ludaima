# typescript extends

我们来看看这段代码

```javascript
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  static className = 'Animal'

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  static className = 'Snake'

  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}
```

使用 tsc，编译成 es5 得到

```javascript
var __extends = ... // @TODO

var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    Animal.className = 'Animal';
    return Animal;
}());

var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    Snake.className = 'Snake';
    return Snake;
}(Animal));
```

现在我们想要实现 __extends 方法。