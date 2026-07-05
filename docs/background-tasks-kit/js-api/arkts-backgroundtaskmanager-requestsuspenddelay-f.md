# requestSuspendDelay

## requestSuspendDelay

```TypeScript
function requestSuspendDelay(reason: string, callback: Callback<void>): DelaySuspendInfo
```

申请短时任务。 > **说明：** > > 短时任务的申请和使用过程中的约束与限制请参考[指南](docroot://task-management/transient-task.md#约束与限制)。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | 申请短时任务的原因。 |
| callback | Callback&lt;void> | Yes | 短时任务即将超时的回调函数，一般在超时前6秒，通过此回调通知应用。 |

**Return value:**

| Type | Description |
| --- | --- |
| DelaySuspendInfo | 返回短时任务信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9800003 | Internal transaction failed. |
| 9800004 | System service operation failed. |
| 9900001 | Caller information verification failed for a transient task. |
| 9900002 | Transient task verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';

let myReason = 'test requestSuspendDelay';
try {
  let delayInfo = backgroundTaskManager.requestSuspendDelay(myReason, () => {
  // Callback function, which is triggered when the transient task is about to time out. The application can carry out data clear and annotation, and cancel the task in the callback.
  // The callback is independent of the service of the application. After the request for the transient task is successful, the application normally executes its own service logic.
    console.info("Request suspension delay will time out.");
  })
  let id = delayInfo.requestId;
  let time = delayInfo.actualDelayTime;
  console.info("The requestId is: " + id);
  console.info("The actualDelayTime is: " + time);
} catch (error) {
  console.error(`requestSuspendDelay failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

