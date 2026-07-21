# resetAllEfficiencyResources (System API)

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

<a id="resetallefficiencyresources"></a>
## resetAllEfficiencyResources

```TypeScript
function resetAllEfficiencyResources(): void
```

Releases all efficiency resources.

**Since:** 9

<!--Device-backgroundTaskManager-function resetAllEfficiencyResources(): void--><!--Device-backgroundTaskManager-function resetAllEfficiencyResources(): void-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Parameter verification failed. |
| [9800001](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800001-memory-operation-failure) | Memory operation failed. |
| [9800002](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800002-parcel-operation-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [9800003](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800003-ipc-failure) | Internal transaction failed. |
| [9800004](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800004-system-service-failure) | System service operation failed. |
| [18700001](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#18700001-caller-information-verification-failure-for-an-energy-resource-request) | Caller information verification failed for an energy resource request. |

**Example**

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';  
import { BusinessError } from '@kit.BasicServicesKit';

try {
    backgroundTaskManager.resetAllEfficiencyResources();
} catch (error) {
    console.error(`resetAllEfficiencyResources failed. code is ${(error as BusinessError).code} message is ${(error as BusinessError).message}`);
}

```

