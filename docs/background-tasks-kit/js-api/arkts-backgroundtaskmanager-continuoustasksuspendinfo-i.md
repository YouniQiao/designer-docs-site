# ContinuousTaskSuspendInfo

长时任务暂停信息。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## continuousTaskId

```TypeScript
continuousTaskId: int
```

被暂停的长时任务 Id。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## suspendMessage

```TypeScript
suspendMessage?: SuspendMessage
```

长时任务暂停信息。

**Type:** SuspendMessage

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## suspendState

```TypeScript
suspendState: boolean
```

长时任务状态，false表示激活，true表示暂停。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## suspendReason

```TypeScript
suspendReason: ContinuousTaskSuspendReason
```

长时任务暂停原因。

**Type:** ContinuousTaskSuspendReason

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

