# cancelSuspendDelay

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@ohos.resourceschedule.backgroundTaskManager';
```

## cancelSuspendDelay

```TypeScript
function cancelSuspendDelay(requestId: number): void
```

Cancels a transient task.

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestId | number | Yes | Request ID of the transient task. It is obtained by calling the[requestSuspendDelay](arkts-backgroundtasks-requestsuspenddelay-f.md#requestsuspenddelay-1) API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [9800001](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800001-memory-operation-failure) | Memory operation failed. |
| [9800002](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800002-parcel-operation-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [9800003](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800003-ipc-failure) | Internal transaction failed. |
| [9800004](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800004-system-service-failure) | System service operation failed. |
| [9900001](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9900001-caller-information-verification-failure-for-a-transient-task) | Caller information verification failed for a transient task. |
| [9900002](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9900002-transient-task-verification-failure) | Transient task verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';

let id = 1;
try {
  backgroundTaskManager.cancelSuspendDelay(id);
} catch (error) {
  console.error(`cancelSuspendDelay failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

