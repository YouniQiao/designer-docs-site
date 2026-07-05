# getAllEfficiencyResources

## getAllEfficiencyResources

```TypeScript
function getAllEfficiencyResources(): Promise<EfficiencyResourcesInfo[]>
```

获取已申请的所有能效资源信息，如能效资源类型等，使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EfficiencyResourcesInfo[]> | Promise对象，返回所有能效资源信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 18700001 | Caller information verification failed for an energy resource request. |
| 18700002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 18700004 | System service operation failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    backgroundTaskManager.getAllEfficiencyResources().then((res: backgroundTaskManager.EfficiencyResourcesInfo[]) => {
        console.info(`Operation getAllEfficiencyResources succeeded. data: ` + JSON.stringify(res));
    }).catch((error : BusinessError) => {
        console.error(`Operation getAllEfficiencyResources failed. code is ${error.code} message is ${error.message}`);
    });
} catch (error) {
    console.error(`Operation getAllEfficiencyResources failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

