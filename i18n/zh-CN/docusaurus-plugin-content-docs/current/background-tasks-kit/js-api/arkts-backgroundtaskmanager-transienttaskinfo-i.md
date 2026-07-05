# TransientTaskInfo

所有短时任务信息。

**起始版本：** 20

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## 导入模块

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## transientTasks

```TypeScript
transientTasks: DelaySuspendInfo[]
```

当前已申请的所有短时任务信息。

**类型：** DelaySuspendInfo[]

**起始版本：** 20

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## remainingQuota

```TypeScript
remainingQuota: int
```

应用当日所剩余总配额，单位：ms。

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

