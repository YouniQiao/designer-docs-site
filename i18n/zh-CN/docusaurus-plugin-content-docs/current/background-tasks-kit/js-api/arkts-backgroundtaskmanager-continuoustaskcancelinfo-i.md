# ContinuousTaskCancelInfo

长时任务取消信息。

**起始版本：** 15

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## 导入模块

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## reason

```TypeScript
reason: ContinuousTaskCancelReason
```

长时任务取消原因。

**类型：** ContinuousTaskCancelReason

**起始版本：** 15

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## id

```TypeScript
id: int
```

被取消的长时任务 Id。

**类型：** int

**起始版本：** 15

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## detailedReason

```TypeScript
detailedReason?: ContinuousTaskDetailedCancelReason
```

长时任务取消详细原因。

**类型：** ContinuousTaskDetailedCancelReason

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

