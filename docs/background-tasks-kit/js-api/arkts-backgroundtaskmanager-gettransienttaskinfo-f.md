# getTransientTaskInfo

## getTransientTaskInfo

```TypeScript
function getTransientTaskInfo(): Promise<TransientTaskInfo>
```

获取所有短时任务信息，如当日剩余总配额等，使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TransientTaskInfo> | Promise对象，返回所有短时任务信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9900001 | Caller information verification failed for a transient task. |
| 9900003 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9900004 | System service operation failed. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  backgroundTaskManager.getTransientTaskInfo().then((res: backgroundTaskManager.TransientTaskInfo) => {
    console.info(`Operation getTransientTaskInfo succeeded. data: ` + JSON.stringify(res));
  }).catch((error : BusinessError) => {
    console.error(`Operation getTransientTaskInfo failed. code is ${error.code} message is ${error.message}`);
  });
} catch (error) {
  console.error(`Operation getTransientTaskInfo failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

