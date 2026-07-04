# ContinuousTaskCancelInfo

Describes the information about the cancellation of a continuous task.

**Since:** 15

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@ohos.resourceschedule.backgroundTaskManager';
```

## detailedReason

```TypeScript
detailedReason?: ContinuousTaskDetailedCancelReason
```

Detailed reason for canceling the continuous task.

**Type:** ContinuousTaskDetailedCancelReason

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## id

```TypeScript
id: number
```

ID of the continuous task canceled.

**Type:** number

**Since:** 15

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## reason

```TypeScript
reason: ContinuousTaskCancelReason
```

Reason for canceling the continuous task.

**Type:** ContinuousTaskCancelReason

**Since:** 15

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

