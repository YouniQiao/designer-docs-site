# getBackgroundTaskState

## getBackgroundTaskState

```TypeScript
function getBackgroundTaskState(stateInfo: BackgroundTaskStateInfo): UserAuthResult
```

获取长时任务授权信息。

**Since:** 22

**Required permissions:** 

 ohos.permission.SET_BACKGROUND_TASK_STATE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stateInfo | BackgroundTaskStateInfo | Yes | 授权的必要信息，包括用户ID、应用包名、应用分身ID等。 |

**Return value:**

| Type | Description |
| --- | --- |
| UserAuthResult | 授权结果。 |

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

try {
    // Update the parameters based on the actual situation.
    let backgroundTaskStateInfo: backgroundTaskManager.BackgroundTaskStateInfo = {
        userId: 100,
        bundleName: 'com.example.continuoustask',
        appIndex: 0
    };
    let auth = backgroundTaskManager.getBackgroundTaskState(backgroundTaskStateInfo);
    console.info('Operation getBackgroundTaskState succeeded. data: ' + JSON.stringify(auth));
} catch (error) {
    console.error(`Operation getBackgroundTaskState failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

