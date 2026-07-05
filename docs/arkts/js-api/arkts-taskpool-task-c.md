# Task

表示任务。任务可以多次执行，也可以放入任务组、串行队列或异步队列执行，还支持添加依赖关系。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## addDependency

```TypeScript
addDependency(...tasks: Task[]): void
```

为当前任务添加对其他任务的依赖。使用该方法前需先构造**Task**实例。该任务和被依赖的任务不能是任务组任务、串行队列任务、 异步队列任务、已执行任务或周期任务。存在依赖关系的任务（依赖其他任务的任务或被依赖的任务）执行后不可再次执行。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tasks | Task[] | Yes | 被依赖的任务数组。默认值为undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200026 | There is a circular dependency. |
| 10200052 | The periodic task cannot have a dependency. [since 12] |
| 10200056 | The task has been executed by the AsyncRunner. [since 18] |

**Example**

```TypeScript
@Concurrent
function delay(args: number): number {
  let t: number = Date.now();
  while ((Date.now() - t) < 1000) {
    continue;
  }
  return args;
}

let task1:taskpool.Task = new taskpool.Task(delay, 100);
let task2:taskpool.Task = new taskpool.Task(delay, 200);
let task3:taskpool.Task = new taskpool.Task(delay, 200);

console.info("dependency: add dependency start");
task1.addDependency(task2);
task2.addDependency(task3);
console.info("dependency: add dependency end");

console.info("dependency: start execute second");
taskpool.execute(task1).then(() => {
  console.info("dependency: second task1 success");
})
taskpool.execute(task2).then(() => {
  console.info("dependency: second task2 success");
})
taskpool.execute(task3).then(() => {
  console.info("dependency: second task3 success");
})

```

## constructor

```TypeScript
constructor(func: Function, ...args: Object[])
```

Task的构造函数，用于创建一个**Task**实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| func | Function | Yes | 执行的逻辑需要传入函数，该函数必须使用  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。 |
| args | Object[] | Yes | 任务执行传入函数的入参，支持的参数类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200014 | The function is not marked as concurrent. |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): number {
  console.info("printArgs: " + args);
  return args;
}

let task: taskpool.Task = new taskpool.Task(printArgs, "this is my first Task");

```

## constructor

```TypeScript
constructor(name: string, func: Function, ...args: Object[])
```

Task的构造函数用于创建一个**Task**实例，并可指定任务名称。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 任务名称。 |
| func | Function | Yes | 执行的逻辑需要传入函数，该函数必须使用  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。 |
| args | Object[] | Yes | 任务执行传入函数的入参，支持的类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

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
let task: taskpool.Task = new taskpool.Task(taskName, printArgs, "this is my first Task");
let name: string = task.name;

```

## isCanceled

```TypeScript
static isCanceled(): boolean
```

检查当前正在运行的任务是否已取消。使用此方法前，需要先创建一个**Task**对象。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果当前正在运行的任务被取消返回true，否则返回false。 |

**Example**

```TypeScript
@Concurrent
function inspectStatus(arg: number): number {
    // do something
    if (taskpool.Task.isCanceled()) {
      console.info("task has been canceled.");
      // do something
      return arg + 1;
    }
    // do something
    return arg;
}


@Concurrent
function inspectStatus(arg: number): number {
  // Check whether the task has been canceled and respond accordingly.
  if (taskpool.Task.isCanceled()) {
    console.info("task has been canceled before 2s sleep.");
    return arg + 2;
  }
  // Wait for 2s.
  let t: number = Date.now();
  while (Date.now() - t < 2000) {
    continue;
  }
  // Check again whether the task has been canceled and respond accordingly.
  if (taskpool.Task.isCanceled()) {
    console.info("task has been canceled after 2s sleep.");
    return arg + 3;
  }
  return arg + 1;
}

let task: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number
taskpool.execute(task).then((res: Object) => {
  console.info("taskpool test result: " + res);
}).catch((err: string) => {
  console.error("taskpool test occur error: " + err);
});
// If cancel is not called, isCanceled() returns false by default, and the task execution result is 101.

```

## isDone

```TypeScript
isDone(): boolean
```

检查任务是否已完成。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。任务执行完成时返回true，任务未执行完成时返回false。 |

**Example**

```TypeScript
@Concurrent
function inspectStatus(arg: number): number {
  // 1s sleep
  let t: number = Date.now();
  while (Date.now() - t < 1000) {
    continue;
  }
  return arg + 1;
}

async function taskpoolCancel(): Promise<void> {
  let task: taskpool.Task = new taskpool.Task(inspectStatus, 100); // 100: test number
  taskpool.execute(task).then((res: Object) => {
    console.info("taskpool test result: " + res);
  }).catch((err: string) => {
    console.error("taskpool test occur error: " + err);
  });

  setTimeout(() => {
    if (!task.isDone()) {
      taskpool.cancel(task);
    }
  }, 3000); // Wait for 3s to ensure that the task has been executed.
}

taskpoolCancel();

```

## onEnqueued

```TypeScript
onEnqueued(callback: CallbackFunction): void
```

注册回调函数，任务入队时将调用该函数。 该注册需在任务执行前完成，否则会抛出异常。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | CallbackFunction | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200034 | The executed task does not support the registration of listeners. |

**Example**

```TypeScript
import { taskpool } from '@kit.ArkTS';

@Concurrent
function delay(args: number): number {
  let t: number = Date.now();
  while ((Date.now() - t) < 1000) {
    continue;
  }
  return args;
}

let task: taskpool.Task = new taskpool.Task(delay, 1);
task.onEnqueued(() => {
  console.info("taskpool: onEnqueued");
});
taskpool.execute(task).then(() => {
  console.info("taskpool: execute task success");
});

```

## onExecutionFailed

```TypeScript
onExecutionFailed(callback: CallbackFunctionWithError): void
```

注册一个回调函数，并在任务执行失败时调用它（周期任务不支持）。 该注册需在任务执行前完成，否则会抛出异常。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | CallbackFunctionWithError | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200034 | The executed task does not support the registration of listeners. |

**Example**

```TypeScript
import { taskpool } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';
import { HashMap } from '@kit.ArkTS';

@Concurrent
function test(args: number) {
  let t = Date.now();
  while ((Date.now() - t) < 100) {
    continue;
  }
  let hashMap1: HashMap<string, number> = new HashMap();
  hashMap1.set('a', args);
  return hashMap1;
}

let task2 = new taskpool.Task(test, 1);
task2.onExecutionFailed((e: Error) => {
  console.info("taskpool: onExecutionFailed error is " + e);
})
taskpool.execute(task2).then(() => {
  console.info("taskpool: execute task success");
}).catch((e:BusinessError) => {
  console.error(`taskpool: error code: ${e.code}, error info: ${e.message}`);
})

```

## onExecutionSucceeded

```TypeScript
onExecutionSucceeded(callback: CallbackFunction): void
```

注册一个回调函数，并在任务执行成功时调用它。 该注册需在任务执行前完成，否则会抛出异常。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | CallbackFunction | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200034 | The executed task does not support the registration of listeners. |

**Example**

```TypeScript
import { taskpool } from '@kit.ArkTS';

@Concurrent
function delay(args: number): number {
  let t: number = Date.now();
  while ((Date.now() - t) < 1000) {
    continue;
  }
  return args;
}

let task: taskpool.Task = new taskpool.Task(delay, 1);
task.onExecutionSucceeded(() => {
  console.info("taskpool: onExecutionSucceeded");
});
taskpool.execute(task).then(() => {
  console.info("taskpool: execute task success");
});

```

## onReceiveData

```TypeScript
onReceiveData(callback?: Function): void
```

为任务注册回调函数，接收并处理任务池工作线程的数据。使用此方法前，需构造Task实例。 说明： 不支持为同一任务定义多种回调函数。如果多次赋值，只有最后一次赋值的回调函数会生效。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Function | No |  |

**Example**

```TypeScript
@Concurrent
function ConcurrentFunc(num: number): number {
  let res: number = num * 10;
  taskpool.Task.sendData(res);
  return num;
}

function printLog(data: number): void {
  console.info("taskpool: data is: " + data);
}

async function testFunc(): Promise<void> {
  try {
    let task: taskpool.Task = new taskpool.Task(ConcurrentFunc, 1);
    task.onReceiveData(printLog);
    await taskpool.execute(task);
  } catch (e) {
    console.error(`taskpool: error code: ${e.code}, info: ${e.message}`);
  }
}

testFunc();

```

## onStartExecution

```TypeScript
onStartExecution(callback: CallbackFunction): void
```

注册回调函数，任务执行前将调用该函数。 该注册需在任务执行前完成，否则会抛出异常。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | CallbackFunction | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200034 | The executed task does not support the registration of listeners. |

**Example**

```TypeScript
import { taskpool } from '@kit.ArkTS';

@Concurrent
function delay(args: number): number {
  let t: number = Date.now();
  while ((Date.now() - t) < 1000) {
    continue;
  }
  return args;
}

let task: taskpool.Task = new taskpool.Task(delay, 1);
task.onStartExecution(() => {
  console.info("taskpool: onStartExecution");
});
taskpool.execute(task).then(() => {
  console.info("taskpool: execute task success");
});

```

## removeDependency

```TypeScript
removeDependency(...tasks: Task[]): void
```

删除当前任务对其他任务的依赖。在使用该方法之前，需要先构造**Task**对象。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tasks | Task[] | Yes | 被依赖的任务数组。默认值为undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200027 | The dependency does not exist. |
| 10200052 | The periodic task cannot have a dependency. [since 12] |
| 10200056 | The task has been executed by the AsyncRunner. [since 18] |

**Example**

```TypeScript
@Concurrent
function delay(args: number): number {
  let t: number = Date.now();
  while ((Date.now() - t) < 1000) {
    continue;
  }
  return args;
}

let task1:taskpool.Task = new taskpool.Task(delay, 100);
let task2:taskpool.Task = new taskpool.Task(delay, 200);
let task3:taskpool.Task = new taskpool.Task(delay, 200);

console.info("dependency: add dependency start");
task1.addDependency(task2);
task2.addDependency(task3);
console.info("dependency: add dependency end");
console.info("dependency: remove dependency start");
task1.removeDependency(task2);
task2.removeDependency(task3);
console.info("dependency: remove dependency end");

console.info("dependency: start execute");
taskpool.execute(task1).then(() => {
  console.info("dependency: task1 success");
})
taskpool.execute(task2).then(() => {
  console.info("dependency: task2 success");
})
taskpool.execute(task3).then(() => {
  console.info("dependency: task3 success");
})

```

## sendData

```TypeScript
static sendData(...args: Object[]): void
```

任务执行过程中向宿主线程发送消息并触发已注册的回调函数。使用此方法前需构造**Task**对象。 > **说明** > > - 该接口应在taskpool的线程中调用。 > > - 避免在回调函数中调用该方法，否则可能导致消息无法传递到宿主线程。 > > - 避免在异步函数中调用该方法，否则可能导致消息无法传递到宿主线程。如果在异步函数中使用， > 则需要使用**await**来确保该异步函数在任务中同步执行完成。 > > - 调用该接口时，请确保处理数据的回调函数已在宿主线程注册。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | Object[] | Yes | 作为已注册回调函数入参的数据，支持的参数类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200022 | The function is not called in the TaskPool thread. |
| 10200023 | The function is not called in the concurrent function. |
| 10200024 | The callback is not registered on the host side. |

**Example**

```TypeScript
@Concurrent
function sendDataTest(num: number): number {
  let res: number = num * 10;
  taskpool.Task.sendData(res);
  return num;
}

function printLog(data: number): void {
  console.info("taskpool: data is: " + data);
}

async function taskpoolTest(): Promise<void> {
  try {
    let task: taskpool.Task = new taskpool.Task(sendDataTest, 1);
    task.onReceiveData(printLog);
    await taskpool.execute(task);
  } catch (e) {
    console.error(`taskpool: error code: ${e.code}, info: ${e.message}`);
  }
}

taskpoolTest();


// Call this method in an asynchronous function.
@Concurrent
async function sendDataTest(num: number) {
  let func = async () => {
    let asyncSleep = async (time: number): Promise<Object> => {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    await asyncSleep(10000);
    let res: number = num * 10;
    taskpool.Task.sendData(res);
  }
  await func(); // Use await to ensure that the asynchronous function is executed synchronously in the task.
}

function taskpoolTest() {
  try {
    let task: taskpool.Task = new taskpool.Task(sendDataTest, 10);
    task.onReceiveData((data: string) => {
      console.info("taskpool: data is: " + data);
    });
    taskpool.execute(task);
  } catch (e) {
    console.error(`taskpool: error code: ${e.code}, info: ${e.message}`);
  }
}

taskpoolTest();

```

## setCloneList

```TypeScript
setCloneList(cloneList: Object[] | ArrayBuffer[]): void
```

设置任务的拷贝列表。在使用该方法前，需先构造**Task**对象。 > **说明** > > 该接口需搭配 > [@Sendable装饰器](docroot://arkts-utils/arkts-sendable.md#sendable装饰器)使用，否则会抛异常。建议开发者使用该装饰器以避免异常。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cloneList | Object[] \| ArrayBuffer[] | Yes | - 传入数组的类型必须为  [Sendable支持的数据类型](docroot://arkts-utils/arkts-sendable.md#sendable支持的数据类型)或ArrayBuffer。 - 所有传入  cloneList的[Sendable class](docroot://arkts-utils/arkts-sendable.md#sendable-class)实例或ArrayBuffer类型对象，  在线程间传输的行为都会变成拷贝传递，即修改传输后的对象不会对原有对象产生任何影响。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200029 | An ArrayBuffer cannot be set as both a transfer list and a clone list. |

**Example**

```TypeScript
// sendable.ets
// Define two Sendable classes: BaseClass and its child class DeriveClass.
@Sendable
export class BaseClass {
  private str: string = "sendable: BaseClass";
  static num :number = 10;
  str1: string = "sendable: this is BaseClass's string";
  num1: number = 5;
  isDone1: boolean = false;

  private fibonacciRecursive(n: number): number {
    if (n <= 1) {
      return n;
    } else {
      return this.fibonacciRecursive(n - 1) + this.fibonacciRecursive(n - 2);
    }
  }

  private privateFunc(num: number): number{
    let res: number = this.fibonacciRecursive(num);
    console.info("sendable: BaseClass privateFunc res is: " + res);
    return res;
  }

  publicFunc(num: number): number {
    return this.privateFunc(num);
  }

  get GetNum(): number {
    return this.num1;
  }
  set SetNum(num: number) {
    this.num1 = num;
  }

  constructor() {
    console.info(this.str);
    this.isDone1 = true;
  }
}

@Sendable
export class DeriveClass extends BaseClass {
  name: string = "sendable: this is DeriveClass";
  printName() {
    console.info(this.name);
  }
  constructor() {
    super();
  }
}


// index.ets
// The host thread (UI main thread) calls the methods of BaseClass and DeriveClass in the task pool thread and accesses their properties.
import { taskpool } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';
import { BaseClass, DeriveClass } from './sendable';

@Concurrent
function testFunc(arr: Array<BaseClass>, num: number): number {
  let baseInstance1 = arr[0];
  console.info("sendable: str1 is: " + baseInstance1.str1);
  baseInstance1.SetNum = 100;
  console.info("sendable: num1 is: " + baseInstance1.GetNum);
  console.info("sendable: isDone1 is: " + baseInstance1.isDone1);
  // Obtain the result of the item specified by num from Fibonacci sequence.
  let res: number = baseInstance1.publicFunc(num);
  return res;
}

@Concurrent
function printLog(arr: Array<DeriveClass>): void {
  let deriveInstance = arr[0];
  deriveInstance.printName();
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button() {
          Text("TaskPool Test");
        }.onClick(() => {
          // task1 calls BaseClass.str1/BaseClass.SetNum/BaseClass.GetNum/BaseClass.isDone1/BaseClass.publicFunc.
          let baseInstance1: BaseClass = new BaseClass();
          let array1 = new Array<BaseClass>();
          array1.push(baseInstance1);
          let task1 = new taskpool.Task(testFunc, array1, 10);
          task1.setCloneList(array1);
          taskpool.execute(task1).then((res: Object) => {
            console.info("sendable: task1 res is: " + res);
          }).catch((e:BusinessError) => {
            console.error(`sendable: task1 execute Code is ${e.code}, message is ${e.message}`);
          })

          // task2 calls DeriveClass.printName.
          let deriveInstance: DeriveClass = new DeriveClass();
          let array2 = new Array<DeriveClass>();
          array2.push(deriveInstance);
          let task2 = new taskpool.Task(printLog, array2);
          task2.setCloneList(array2);
          taskpool.execute(task2).then(() => {
            console.info("sendable: task2 execute success");
          }).catch((e:BusinessError) => {
            console.error(`sendable: task2 execute Code is ${e.code}, message is ${e.message}`);
          })
        })
        .height('15%')
        .width('30%')
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

## setTransferList

```TypeScript
setTransferList(transfer?: ArrayBuffer[]): void
```

设置任务的传输列表。使用该方法前需要先构造**Task**。不调用该接口，则传给任务的数据中的ArrayBuffer默认transfer转移。 > **说明** > > 此接口可以设置任务池中ArrayBuffer的transfer列表，transfer列表中的ArrayBuffer对象在传输时不会复制buffer内容到工作线程， > 而是转移buffer控制权至工作线程，传输后当前的ArrayBuffer失效。若ArrayBuffer为空，则不会transfer转移。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transfer | ArrayBuffer[] | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200029 | An ArrayBuffer cannot be set as both a transfer list and a clone list.  [since 11] |

**Example**

```TypeScript
@Concurrent
function testTransfer(arg1: ArrayBuffer, arg2: ArrayBuffer): number {
  console.info("testTransfer arg1 byteLength: " + arg1.byteLength);
  console.info("testTransfer arg2 byteLength: " + arg2.byteLength);
  return 100;
}

let buffer: ArrayBuffer = new ArrayBuffer(8);
let view: Uint8Array = new Uint8Array(buffer);
let buffer1: ArrayBuffer = new ArrayBuffer(16);
let view1: Uint8Array = new Uint8Array(buffer1);

console.info("testTransfer view byteLength: " + view.byteLength);
console.info("testTransfer view1 byteLength: " + view1.byteLength);
// The execution result is as follows:
// testTransfer view byteLength: 8
// testTransfer view1 byteLength: 16

let task: taskpool.Task = new taskpool.Task(testTransfer, view, view1);
task.setTransferList([view.buffer, view1.buffer]);
taskpool.execute(task).then((res: Object) => {
  console.info("test result: " + res);
}).catch((e: string) => {
  console.error("test catch: " + e);
})
console.info("testTransfer view2 byteLength: " + view.byteLength);
console.info("testTransfer view3 byteLength: " + view1.byteLength);
// The value is 0 after transfer. The execution result is as follows:
// testTransfer view2 byteLength: 0
// testTransfer view3 byteLength: 0

```

## ioDuration

```TypeScript
ioDuration: number
```

执行任务异步IO耗时。单位为ms。不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## totalDuration

```TypeScript
totalDuration: number
```

执行任务总耗时。单位为ms。不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## cpuDuration

```TypeScript
cpuDuration: number
```

执行任务CPU耗时。单位为ms。不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## function

```TypeScript
function: Function
```

创建任务时需要传入的函数，支持的函数返回值类型请参考[序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** Function

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## name

```TypeScript
name: string
```

创建任务时指定的任务名称。不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## arguments

```TypeScript
arguments?: Object[]
```

创建任务传入函数所需的参数，支持的参数类型请参考[序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** Object[]

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## taskId

```TypeScript
taskId: number
```

任务ID。任务的标识符，系统默认提供全局唯一值，不建议修改此值。<br> 从API version 18开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

