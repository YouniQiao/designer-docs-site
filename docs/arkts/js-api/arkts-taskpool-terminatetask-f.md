# terminateTask

## terminateTask

```TypeScript
function terminateTask(longTask: LongTask): void
```

中止任务池中的长时任务，在长时任务执行完成后调用。中止后，执行长时任务的线程可能会被回收。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| longTask | LongTask | Yes | 需要中止的长时任务。 |

**Example**

```TypeScript
@Concurrent
function longTask(arg: number): number {
  let t: number = Date.now();
  while (Date.now() - t < arg) {
    continue;
  }
  console.info("longTask has been executed.");
  return arg;
}

function concurrentFunc() {
  let task1: taskpool.LongTask = new taskpool.LongTask(longTask, 1000); // 1000: sleep time
  taskpool.execute(task1).then((res: Object) => {
    taskpool.terminateTask(task1);
    console.info("taskpool longTask result: " + res);
  });
}

concurrentFunc();

```

