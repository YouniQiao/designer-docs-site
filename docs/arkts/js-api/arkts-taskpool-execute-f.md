# execute

## execute

```TypeScript
function execute(func: Function, ...args: Object[]): Promise<Object>
```

将待执行的函数放入taskpool的内部任务队列，函数不会立即执行，而是等待分发到工作线程执行。在当前执行模式下， 不支持取消任务。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| func | Function | Yes | 执行的逻辑需要传入函数，该函数必须使用  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。 |
| args | Object[] | Yes | 任务执行传入函数的入参，支持的参数类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object> | [since 9 - 11]  @returns { Promise } Promise对象，返回任务函数的执行结果。 [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200003 | Worker initialization failed. [since 9 - 11] |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): number {
    console.info("printArgs: " + args);
    return args;
}

taskpool.execute(printArgs, 100).then((value: Object) => { // 100: test number
  console.info("taskpool result: " + value);
});

```

## execute

```TypeScript
function execute<A extends Array<Object>, R>(func: (...args: A) => R | Promise<R>, ...args: A): Promise<R>
```

校验并发函数的参数类型和返回值类型后，将函数添加到taskpool的任务队列。使用Promise异步回调。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| func | (...args: A) => R \| Promise&lt;R> | Yes | 执行的逻辑需要传入函数，该函数必须使用  [@Concurrent装饰器](docroot://arkts-utils/taskpool-introduction.md#concurrent装饰器)装饰。支持的函数返回值类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。 |
| args | A | Yes | 任务执行传入函数的入参，支持的参数类型请参考  [序列化支持类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)。默认值为undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;R> | Promise对象，返回任务函数的执行结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): number {
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

taskpool.execute<[number], number>(printArgs, 100).then((value: number) => { // 100: test number
  console.info("taskpool result: " + value); // "taskpool result: 100"
});

taskpool.execute<[number, string, number], string>(testWithThreeParams, 100, "test", 100).then((value: string) => {
  console.info("taskpool result: " + value); // "taskpool result: test"
});

taskpool.execute<[[number, string]], string>(testWithArray, [100, "test"]).then((value: string) => {
  console.info("taskpool result: " + value); // "taskpool result: success"
});

```

## execute

```TypeScript
function execute(task: Task, priority?: Priority): Promise<Object>
```

将创建好的任务添加到taskpool的内部任务队列中，任务不会立即执行，而是等待分发到工作线程执行。当前模式支持设置任务优先级和通过cancel取消任务。 任务不能是任务组任务、串行队列任务或异步队列任务。对于非长时任务，可以多次调用执行；对于长时任务，仅支持执行一次。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | Task | Yes | 需要在任务池中执行的任务。 |
| priority | Priority | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object> | [since 9 - 17]  @returns { Promise } Promise对象，返回任务函数的执行结果。 [since 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200003 | Worker initialization failed. [since 9 - 17] |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |
| 10200051 | The periodic task cannot be executed again. [since 12] |
| 10200057 | The task cannot be executed by two APIs. [since 18] |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): number {
    console.info("printArgs: " + args);
    return args;
}

let task1: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number
let task2: taskpool.Task = new taskpool.Task(printArgs, 200); // 200: test number
let task3: taskpool.Task = new taskpool.Task(printArgs, 300); // 300: test number
taskpool.execute(task1, taskpool.Priority.LOW).then((value: Object) => {
  console.info("taskpool result1: " + value);
});
taskpool.execute(task2, taskpool.Priority.MEDIUM).then((value: Object) => {
  console.info("taskpool result2: " + value);
});
taskpool.execute(task3, taskpool.Priority.HIGH).then((value: Object) => {
  console.info("taskpool result3: " + value);
});

```

## execute

```TypeScript
function execute<A extends Array<Object>, R>(task: GenericsTask<A, R>, priority?: Priority): Promise<R>
```

将创建好的泛型任务放入taskpool的内部任务队列，校验任务的参数类型和返回值类型。使用Promise异步回调。 execute任务的校验是结合**new GenericsTask**一起用的，参数、返回值类型需与**new GenericsTask**中的类型保持一致。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | GenericsTask&lt;A, R> | Yes | 需要在任务池中执行的泛型任务。 |
| priority | Priority | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;R> | Promise对象，返回任务函数的执行结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |
| 10200051 | The periodic task cannot be executed again. |
| 10200057 | The task cannot be executed by two APIs. [since 18] |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): number {
    console.info("printArgs: " + args);
    return args;
}

let task1: taskpool.Task = new taskpool.GenericsTask<[number], number>(printArgs, 100); // 100: test number
let task2: taskpool.Task = new taskpool.GenericsTask<[number], number>(printArgs, 200); // 200: test number
let task3: taskpool.Task = new taskpool.GenericsTask<[number], number>(printArgs, 300); // 300: test number
taskpool.execute<[number], number>(task1, taskpool.Priority.LOW).then((value: number) => {
  console.info("taskpool result1: " + value);
});
taskpool.execute<[number], number>(task2, taskpool.Priority.MEDIUM).then((value: number) => {
  console.info("taskpool result2: " + value);
});
taskpool.execute<[number], number>(task3, taskpool.Priority.HIGH).then((value: number) => {
  console.info("taskpool result3: " + value);
});

```

## execute

```TypeScript
function execute(group: TaskGroup, priority?: Priority): Promise<Object[]>
```

将创建好的任务组放入taskpool内部任务队列，任务组中的任务不会立即执行，而是等待分发到工作线程执行。任务组中任务全部执行完成后， 结果数组统一返回。此模式适用于执行关联任务。使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| group | TaskGroup | Yes | 需要在任务池中执行的任务组。 |
| priority | Priority | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object[]> | Promise对象数组，返回任务函数的执行结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200059 | TaskGroup cannot be re-executed. [since 24] |

**Example**

```TypeScript
@Concurrent
function printArgs(args: number): number {
    console.info("printArgs: " + args);
    return args;
}

let taskGroup1: taskpool.TaskGroup = new taskpool.TaskGroup();
taskGroup1.addTask(printArgs, 10); // 10: test number
taskGroup1.addTask(printArgs, 20); // 20: test number
taskGroup1.addTask(printArgs, 30); // 30: test number

let taskGroup2: taskpool.TaskGroup = new taskpool.TaskGroup();
let task1: taskpool.Task = new taskpool.Task(printArgs, 100); // 100: test number
let task2: taskpool.Task = new taskpool.Task(printArgs, 200); // 200: test number
let task3: taskpool.Task = new taskpool.Task(printArgs, 300); // 300: test number
taskGroup2.addTask(task1);
taskGroup2.addTask(task2);
taskGroup2.addTask(task3);
taskpool.execute(taskGroup1).then((res: Array<Object>) => {
  console.info("taskpool execute res is:" + res);
});
taskpool.execute(taskGroup2).then((res: Array<Object>) => {
  console.info("taskpool execute res is:" + res);
});

```

## execute

```TypeScript
function execute(task: Task, configs: Configs): Promise<Object>
```

通过Configs执行并发任务。

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | Task | Yes | 需要执行的任务。 |
| configs | Configs | Yes | 任务的配置项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |
| 10200051 | The periodic task cannot be executed again. |
| 10200057 | The task cannot be executed by two APIs. |
| 10200058 | Task timed out. |

## execute

```TypeScript
function execute<A extends Array<Object>, R>(task: GenericsTask<A, R>, configs: Configs): Promise<R>
```

通过Configs执行并发泛型任务。

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | GenericsTask&lt;A, R> | Yes | 需要执行的泛型任务。 |
| configs | Configs | Yes | 任务的配置项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;R> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200014 | The function is not marked as concurrent. |
| 10200051 | The periodic task cannot be executed again. |
| 10200057 | The task cannot be executed by two APIs. |
| 10200058 | Task timed out. |

## execute

```TypeScript
function execute(group: TaskGroup, configs: Configs): Promise<Object[]>
```

通过Configs执行并发任务组。

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| group | TaskGroup | Yes | 需要执行的任务组。 |
| configs | Configs | Yes | 任务组中各任务的配置项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object[]> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200006 | An exception occurred during serialization. |
| 10200059 | TaskGroup cannot be re-executed. |
| 10200070 | TaskGroup timed out. |

