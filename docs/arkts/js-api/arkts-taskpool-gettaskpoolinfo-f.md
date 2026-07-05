# getTaskPoolInfo

## getTaskPoolInfo

```TypeScript
function getTaskPoolInfo(): TaskPoolInfo
```

获取任务池的线程信息和任务信息。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| TaskPoolInfo | 任务池的内部信息。 |

**Example**

```TypeScript
let taskpoolInfo: taskpool.TaskPoolInfo = taskpool.getTaskPoolInfo();

```

