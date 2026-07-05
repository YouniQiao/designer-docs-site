# ContinuousTaskNotification

长时任务通知信息。

**Since:** 12

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## continuousTaskId

```TypeScript
continuousTaskId?: int
```

长时任务 Id。

**Type:** int

**Since:** 15

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## slotType

```TypeScript
slotType: notificationManager.SlotType
```

长时任务通知的渠道类型。 **说明：** 长时任务申请或更新成功后不支持提示音。

**Type:** notificationManager.SlotType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## notificationId

```TypeScript
notificationId: int
```

长时任务通知 Id。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## contentType

```TypeScript
contentType: notificationManager.ContentType
```

长时任务通知的内容类型。

**Type:** notificationManager.ContentType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

