# ContinuousTaskCancelInfo

长时任务取消信息。

**Since:** 15

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## reason

```TypeScript
reason: ContinuousTaskCancelReason
```

长时任务取消原因。

**Type:** ContinuousTaskCancelReason

**Since:** 15

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## id

```TypeScript
id: int
```

被取消的长时任务 Id。

**Type:** int

**Since:** 15

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## detailedReason

```TypeScript
detailedReason?: ContinuousTaskDetailedCancelReason
```

长时任务取消详细原因。

**Type:** ContinuousTaskDetailedCancelReason

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

