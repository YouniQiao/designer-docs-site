# obtainAllContinuousTasks

## obtainAllContinuousTasks

```TypeScript
function obtainAllContinuousTasks(): Promise<ContinuousTaskInfo[]>
```

获取所有长时任务信息，如长时任务ID、长时任务类型等。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_BACKGROUND_TASK_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ContinuousTaskInfo[]> | Promise对象，返回所有长时任务信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 9800004 | System service operation failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    // If no continuous task is requested, an empty array is obtained.
    backgroundTaskManager.obtainAllContinuousTasks().then((res: backgroundTaskManager.ContinuousTaskInfo[]) => {
        console.info(`Operation obtainAllContinuousTasks succeeded. data: ` + JSON.stringify(res));
    }).catch((error: BusinessError) => {
        console.error(`Operation obtainAllContinuousTasks failed. code is ${error.code} message is ${error.message}`);
    });
} catch (error) {
    console.error(`Operation obtainAllContinuousTasks failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

