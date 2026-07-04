# TaskPoolInfo

Describes the internal information about a task pool.

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@ohos.taskpool';
```

## taskInfos

```TypeScript
taskInfos: TaskInfo[]
```

Internal information about the tasks. You are advised not to change the value.

**Type:** TaskInfo[]

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## threadInfos

```TypeScript
threadInfos: ThreadInfo[]
```

Internal information about the worker threads. You are advised not to change the value.

**Type:** ThreadInfo[]

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

