# Aspect

提供支持面向切面编程（AOP）的 API。这些 API 可用于对类方法进行插桩或替换。

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## addAfter

```TypeScript
static addAfter(targetClass: Object, methodName: string, isStatic: boolean, after: Function): void
```

在类对象的方法后插入一个函数。最终的返回值为被插入函数的返回值。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetClass | Object | Yes | 目标类对象。 |
| methodName | string | Yes | 方法名。不支持只读方法。 |
| isStatic | boolean | Yes | 该方法是否为静态方法。值为 true 表示静态方法，值为 false 表示实例方法。 |
| after | Function | Yes | 要插入的函数。如果该函数携带参数，则第一个参数为 this 对象：当 isStatic  为 true 时为目标类对象（由 targetClass 指定），当 isStatic 为 false 时为该方法的实例对象；  第二个参数为原方法的返回值（如果原方法没有返回值则为 undefined）；其余参数为原方法携带的参数。如果该函数  不携带任何参数，则不执行任何处理。 |

**Example**

```TypeScript
class MyClass {
  msg: string = 'msg000';
  foo(arg: string): string {
    console.info('foo arg is ' + arg);
    return this.msg;
  }
}

let asp = new MyClass();
let result = asp.foo('123');
// Output: foo arg is 123
console.info('result is ' + result);
// Output: result is msg000
console.info('asp.msg is ' + asp.msg);
// Output: asp.msg is msg000

util.Aspect.addAfter(MyClass, 'foo', false, (instance: MyClass, ret: string, arg: string): string => {
  console.info('arg is ' + arg);
  console.info('ret is ' + ret);
  instance.msg = 'msg111';
  console.info('msg is changed to ' + instance.msg);
  return 'msg222';
});

result = asp.foo('123');
// Output: foo arg is 123
// Output: arg is 123
// Output: ret is msg000
// Output: msg is changed to msg111
console.info('result is ' + result);
// Output: result is msg222
console.info('asp.msg is ' + asp.msg);
// Output: asp.msg is msg111

// Examples of addBefore() and addAfter()
class AroundTest {
  foo(arg: string) {
    console.info('execute foo with arg ' + arg);
  }
}
util.Aspect.addBefore(AroundTest, 'foo', false, () => {
  console.info('execute before');
});
util.Aspect.addAfter(AroundTest, 'foo', false, () => {
  console.info('execute after');
});

(new AroundTest()).foo('hello');
// Output: execute before
// Output: execute foo with arg hello
// Output: execute after

```

## addBefore

```TypeScript
static addBefore(targetClass: Object, methodName: string, isStatic: boolean, before: Function): void
```

在类对象的方法前插入一个函数。被插入的函数会先于类对象的原方法执行。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetClass | Object | Yes | 目标类对象。 |
| methodName | string | Yes | 方法名。不支持只读方法。 |
| isStatic | boolean | Yes | 该方法是否为静态方法。值为 true 表示静态方法，值为 false 表示实例方法。 |
| before | Function | Yes | 要插入的函数。如果该函数携带参数，则第一个参数为 this 对象：当 isStatic  为 true 时为目标类对象（由 targetClass 指定），当 isStatic 为 false 时为该方法的实例对象；  其余参数为原方法携带的参数。如果该函数不携带任何参数，则不执行任何处理。 |

**Example**

```TypeScript
class MyClass {
  msg: string = 'msg000';
  foo(arg: string): string {
    console.info('foo arg is ' + arg);
    return this.msg;
  }

  static data: string = 'data000';
  static bar(arg: string): string {
    console.info('bar arg is ' + arg);
    return MyClass.data;
  }
}

let asp = new MyClass();
let result = asp.foo('123');
// Output: foo arg is 123
console.info('result is ' + result);
// Output: result is msg000
console.info('asp.msg is ' + asp.msg);
// Output: asp.msg is msg000

util.Aspect.addBefore(MyClass, 'foo', false, (instance: MyClass, arg: string) => {
  console.info('arg is ' + arg);
  instance.msg = 'msg111';
  console.info('msg is changed to ' + instance.msg);
});

result = asp.foo('123');
// Output: arg is 123
// Output: msg is changed to msg111
// Output: foo arg is 123
console.info('result is ' + result);
// Output: result is msg111
console.info('asp.msg is ' + asp.msg);
// Output: asp.msg is msg111


let res = MyClass.bar('456');
// Output: bar arg is 456
console.info('res is ' + res);
// Output: res is data000
console.info('MyClass.data is ' + MyClass.data);
// Output: MyClass.data is data000

util.Aspect.addBefore(MyClass, 'bar', true, (target: Object, arg: string) => {
  console.info('arg is ' + arg);
  let newVal = 'data111';
  Reflect.set(target, 'data', newVal);
  console.info('data is changed to ' + newVal);
});

res = MyClass.bar('456');
// Output: arg is 456
// Output: data is changed to data111
// Output: bar arg is 456
console.info('res is ' + res);
//Output: res is data111
console.info('MyClass.data is ' + MyClass.data);
// Output: MyClass.data is data111

```

## replace

```TypeScript
static replace(targetClass: Object, methodName: string, isStatic: boolean, instead: Function) : void
```

使用另一个函数替换类对象的方法。替换后，仅执行新函数的逻辑。最终的返回值为新函数的返回值。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetClass | Object | Yes | 目标类对象。 |
| methodName | string | Yes | 方法名。不支持只读方法。 |
| isStatic | boolean | Yes | 该方法是否为静态方法。值为 true 表示静态方法，值为 false 表示实例方法。 |
| instead | Function | Yes | 用于替换的函数。如果该函数携带参数，则第一个参数为 this 对象：当 isStatic  为 true 时为目标类对象（由 targetClass 指定），当 isStatic 为 false 时为该方法的实例对象；  其余参数为原方法携带的参数。如果该函数不携带任何参数，则不执行任何处理。 |

**Example**

```TypeScript
class MyClass {
  msg: string = 'msg000';
  foo(arg: string): string {
    console.info('foo arg is ' + arg);
    return this.msg;
  }
}

let asp = new MyClass();
let result = asp.foo('123');
// Output: foo arg is 123
console.info('result is ' + result);
// Output: result is msg000
console.info('asp.msg is ' + asp.msg);
// Output: asp.msg is msg000

util.Aspect.replace(MyClass, 'foo', false, (instance: MyClass, arg: string): string => {
  console.info('execute instead');
  console.info('arg is ' + arg);
  instance.msg = 'msg111';
  console.info('msg is changed to ' + instance.msg);
  return 'msg222';
});

result = asp.foo('123');
// Output: execute instead
// Output: arg is 123
// Output: msg is changed to msg111
console.info('result is ' + result);
// Output: result is msg222
console.info('asp.msg is ' + asp.msg);
// Output: asp.msg is msg111

```

