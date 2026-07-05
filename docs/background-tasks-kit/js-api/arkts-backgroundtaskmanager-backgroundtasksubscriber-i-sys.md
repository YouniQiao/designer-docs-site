# BackgroundTaskSubscriber

后台任务监听。

**Since:** 23

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## onContinuousTaskStart

```TypeScript
onContinuousTaskStart(info: ContinuousTaskInfo): void
```

长时任务开始回调接口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | ContinuousTaskInfo | Yes | 长时任务回调信息，长时任务ID、长时任务类型等。 |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';

let backgroundTaskSubscriber : backgroundTaskManager.BackgroundTaskSubscriber = {
    onContinuousTaskStart: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskStart succeeded. data: ' + JSON.stringify(info));
    },
    onContinuousTaskUpdate: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskUpdate succeeded. data: ' + JSON.stringify(info));
    },
    onContinuousTaskStop: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskStop succeeded. data: ' + JSON.stringify(info));
    }
}

```

## onContinuousTaskStop

```TypeScript
onContinuousTaskStop(info: ContinuousTaskInfo): void
```

长时任务结束回调接口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | ContinuousTaskInfo | Yes | 长时任务回调信息，长时任务ID、长时任务类型等。 |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';

let backgroundTaskSubscriber : backgroundTaskManager.BackgroundTaskSubscriber = {
    onContinuousTaskStart: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskStart succeeded. data: ' + JSON.stringify(info));
    },
    onContinuousTaskUpdate: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskUpdate succeeded. data: ' + JSON.stringify(info));
    },
    onContinuousTaskStop: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskStop succeeded. data: ' + JSON.stringify(info));
    }
}

```

## onContinuousTaskUpdate

```TypeScript
onContinuousTaskUpdate(info: ContinuousTaskInfo): void
```

长时任务更新回调接口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | ContinuousTaskInfo | Yes | 长时任务回调信息，长时任务ID、长时任务类型等。 |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';

let backgroundTaskSubscriber : backgroundTaskManager.BackgroundTaskSubscriber = {
    onContinuousTaskStart: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskStart succeeded. data: ' + JSON.stringify(info));
    },
    onContinuousTaskUpdate: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskUpdate succeeded. data: ' + JSON.stringify(info));
    },
    onContinuousTaskStop: (info: backgroundTaskManager.ContinuousTaskInfo): void => {
        console.info('Operation onContinuousTaskStop succeeded. data: ' + JSON.stringify(info));
    }
}

```

