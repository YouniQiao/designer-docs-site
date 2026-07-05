# unsubscribeContinuousTaskState

## unsubscribeContinuousTaskState

```TypeScript
function unsubscribeContinuousTaskState(subscriber: BackgroundTaskSubscriber): void
```

解注册长时任务变化回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_BACKGROUND_TASK_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | BackgroundTaskSubscriber | Yes | 后台任务监听对象，包含长时任务开始，长时任务更新，长时任务结束。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 9800004 | System service operation failed. |
| 9800005 | Continuous task verification failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

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

try {
    backgroundTaskManager.unsubscribeContinuousTaskState(backgroundTaskSubscriber);
    console.info('Operation unsubscribeContinuousTaskState succeeded');
} catch (error) {
    console.error(`Operation unsubscribeContinuousTaskState failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

