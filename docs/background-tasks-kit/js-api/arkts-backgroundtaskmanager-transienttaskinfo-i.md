# TransientTaskInfo

所有短时任务信息。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## transientTasks

```TypeScript
transientTasks: DelaySuspendInfo[]
```

当前已申请的所有短时任务信息。

**Type:** DelaySuspendInfo[]

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## remainingQuota

```TypeScript
remainingQuota: int
```

应用当日所剩余总配额，单位：ms。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

