# GenericsTask

表示泛型任务。**GenericsTask**继承自 [Task]taskpool.execute(func: Function, ...args: Object[])。 相比创建Task，创建GenericsTask可以在编译阶段校验并发函数的传参和返回值类型。其余行为与Task相同。

**Inheritance:** GenericsTaskextends: Task.

**Since:** 13

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(func: (...args: A) => R | Promise<R>, ...args: A)
```

GenericsTask的构造函数，用于创建一个**GenericsTask**对象。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| func | (...args: A) => R \| Promise&lt;R> | Yes | 执行的逻辑需要传入函数，该函数必须使用  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。 |
| args | A | Yes | 任务执行传入函数的入参，支持的参数类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200014 | The function is not marked as concurrent. |

**Example**

```TypeScript
@Concurrent
function printArgs(args: string): string {
  console.info("printArgs: " + args);
  return args;
}

@Concurrent
function testWithThreeParams(a: number, b: string, c: number): string {
  return b;
}

@Concurrent
function testWithArray(args: [number, string]): string {
  return "success";
}

let task1: taskpool.Task = new taskpool.GenericsTask<[string], string>(printArgs, "this is my first LongTask");

let task2: taskpool.Task = new taskpool.GenericsTask<[number, string, number], string>(testWithThreeParams, 100, "test", 100);

let task3: taskpool.Task = new taskpool.GenericsTask<[[number, string]], string>(testWithArray, [100, "test"]);

```

## constructor

```TypeScript
constructor(name: string, func: (...args: A) => R | Promise<R>, ...args: A)
```

GenericsTask的构造函数，用于创建一个**GenericsTask**实例，并可指定任务名称。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 泛型任务名称。 |
| func | (...args: A) => R \| Promise&lt;R> | Yes | 执行的逻辑需要传入函数，该函数必须使用  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。 |
| args | A | Yes | 任务执行传入函数的入参，支持的参数类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200014 | The function is not marked as concurrent. |

**Example**

```TypeScript
@Concurrent
function printArgs(args: string): string {
  console.info("printArgs: " + args);
  return args;
}

let taskName: string = "taskName";
let task: taskpool.Task = new taskpool.GenericsTask<[string], string>(taskName, printArgs, "this is my first Task");
let name: string = task.name;

```

