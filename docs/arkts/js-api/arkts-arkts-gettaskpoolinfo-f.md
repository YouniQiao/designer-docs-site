# getTaskPoolInfo

## Modules to Import

```TypeScript
import { taskpool } from '@ohos.taskpool';
```

## getTaskPoolInfo

```TypeScript
function getTaskPoolInfo(): TaskPoolInfo
```

Obtains the thread information and task information of the task pool.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| TaskPoolInfo | Internal information about the task pool. |

**Example**

```TypeScript
let taskpoolInfo: taskpool.TaskPoolInfo = taskpool.getTaskPoolInfo();

```

