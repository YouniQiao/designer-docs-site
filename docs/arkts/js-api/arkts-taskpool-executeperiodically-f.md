# executePeriodically

## executePeriodically

```TypeScript
function executePeriodically(period: number, task: Task, priority?: Priority): void
```

周期任务每隔period时长执行一次。当前执行模式支持设置任务优先级，并可以通过调用**cancel()**取消执行。周期任务不能是任务组任务、 串行队列任务或异步队列任务，不能再次调用执行接口，且执行的任务不能拥有依赖关系。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| period | number | Yes | 周期时长，单位为ms。period值必须要大于等于0。  该值应为整数。  单位：毫秒。 |
| task | Task | Yes | 需要周期执行的任务。 |
| priority | Priority | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |
| 10200028 | The period is less than zero. |
| 10200050 | The concurrent task has been executed and cannot be executed periodically. |
| 10200057 | The task cannot be executed by two APIs. [since 18] |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): void {
  console.info("printArgs: " + args);
}

@Concurrent
function testExecutePeriodically(args: number): void {
  let t = Date.now();
  while ((Date.now() - t) < args) {
    continue;
  }
  taskpool.Task.sendData(args); // Send a message to the host thread.
}

function printResult(data: number): void {
  console.info("taskpool: data is: " + data);
}

function taskpoolTest() {
  try {
    let task: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number
    taskpool.executePeriodically(1000, task); // 1000: period is 1000ms
  } catch (e) {
    console.error(`taskpool execute-1: Code: ${e.code}, message: ${e.message}`);
  }

  try {
    let periodicTask: taskpool.Task = new taskpool.Task(testExecutePeriodically, 200); // 200: test number
    periodicTask.onReceiveData(printResult);
    taskpool.executePeriodically(1000, periodicTask); // 1000: period is 1000ms
  } catch (e) {
    console.error(`taskpool execute-2: Code: ${e.code}, message: ${e.message}`);
  }
}

taskpoolTest();

```

## executePeriodically

```TypeScript
function executePeriodically<A extends Array<Object>, R>(period: number, task: GenericsTask<A, R>, priority?: Priority): void
```

周期执行泛型任务，不校验任务的参数类型和返回值类型。 executePeriodically任务的校验是结合**new GenericsTask**一起用的，参数、返回值类型需与**new GenericsTask**中的类型保持一致。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| period | number | Yes | 周期时长，单位为ms。period值必须要大于等于0。  该值应为整数。  单位：毫秒。 |
| task | GenericsTask&lt;A, R> | Yes | 需要周期执行的泛型任务。 |
| priority | Priority | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |
| 10200028 | The period is less than zero. |
| 10200050 | The concurrent task has been executed and cannot be executed periodically. |
| 10200057 | The task cannot be executed by two APIs. [since 18] |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): void {
  console.info("printArgs: " + args);
}

@Concurrent
function testExecutePeriodically(args: number): void {
  let t = Date.now();
  while ((Date.now() - t) < args) {
    continue;
  }
  taskpool.Task.sendData(args); // Send a message to the host thread.
}

function printResult(data: number): void {
  console.info("taskpool: data is: " + data);
}

function taskpoolTest() {
  try {
    let task: taskpool.Task = new taskpool.GenericsTask<[number], void>(printArgs, 100); // 100: test number
    taskpool.executePeriodically<[number], void>(1000, task); // 1000: period is 1000ms
  } catch (e) {
    console.error(`taskpool execute-1: Code: ${e.code}, message: ${e.message}`);
  }

  try {
    let periodicTask: taskpool.Task = new taskpool.GenericsTask<[number], void>(testExecutePeriodically, 200); // 200: test number
    periodicTask.onReceiveData(printResult);
    taskpool.executePeriodically<[number], void>(1000, periodicTask); // 1000: period is 1000ms
  } catch (e) {
    console.error(`taskpool execute-2: Code: ${e.code}, message: ${e.message}`);
  }
}

taskpoolTest();

```

