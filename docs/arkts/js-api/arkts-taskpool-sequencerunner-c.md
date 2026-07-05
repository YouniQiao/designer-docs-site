# SequenceRunner

表示串行队列的任务，用于执行一组需要串行执行的任务。

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(priority?: Priority)
```

SequenceRunner的构造函数，用于创建一个**SequenceRunner**实例。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priority | Priority | No | 指定任务的优先级，默认值为taskpool.Priority.MEDIUM。 |

**Example**

```TypeScript
let runner: taskpool.SequenceRunner = new taskpool.SequenceRunner();

```

## constructor

```TypeScript
constructor(name: string, priority?: Priority)
```

SequenceRunner的构造函数，用于创建一个**SequenceRunner**实例。该实例表示一个全局串行队列。如果传入的名字与已有名字相同， 将返回同一个串行队列。 > **说明** > > - 底层通过单例模式保证了：创建同名串行队列时，获取到同一个实例。 > > - 无法修改串行队列的优先级。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 串行队列的名字。 |
| priority | Priority | No | 指定任务的优先级，默认值为taskpool.Priority.MEDIUM。 |

**Example**

```TypeScript
let runner:taskpool.SequenceRunner = new taskpool.SequenceRunner("runner1", taskpool.Priority.LOW);

```

## execute

```TypeScript
execute(task: Task): Promise<Object>
```

执行串行任务。使用该方法前需先构造**SequenceRunner**实例。串行队列不能执行任务组任务、其他串行队列任务、异步队列任务、 有依赖关系的任务和已执行的任务。使用Promise异步回调。 > **说明** > > - 不支持加入存在依赖的任务。 > > - 前面的任务执行失败或取消不会影响后续任务的执行。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | Task | Yes | 需要添加到串行任务队列中的任务。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Object> | Promise对象，返回任务执行的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200003 | Worker initialization failed. [since 11 - 17] |
| 10200006 | An exception occurred during serialization. |
| 10200025 | dependent task not allowed. |
| 10200051 | The periodic task cannot be executed again. [since 12] |
| 10200057 | The task cannot be executed by two APIs. [since 18] |

**Example**

```TypeScript
@Concurrent
function additionDelay(delay: number): void {
  let start: number = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
}
@Concurrent
function waitForRunner(finalString: string): string {
  return finalString;
}
async function seqRunner() {
  let finalString:string = "";
  let task1:taskpool.Task = new taskpool.Task(additionDelay, 3000);
  let task2:taskpool.Task = new taskpool.Task(additionDelay, 2000);
  let task3:taskpool.Task = new taskpool.Task(additionDelay, 1000);
  let task4:taskpool.Task = new taskpool.Task(waitForRunner, finalString);

  let runner:taskpool.SequenceRunner = new taskpool.SequenceRunner();
  runner.execute(task1).then(() => {
    finalString += 'a';
    console.info("seqrunner: task1 done.");
  });
  runner.execute(task2).then(() => {
    finalString += 'b';
    console.info("seqrunner: task2 done");
  });
  runner.execute(task3).then(() => {
    finalString += 'c';
    console.info("seqrunner: task3 done");
  });
  await runner.execute(task4);
  console.info("seqrunner: task4 done, finalString is " + finalString);
}

```

