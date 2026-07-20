# getTaskInfo

## Modules to Import

```TypeScript
import { backgroundLoader } from '@kit.BackgroundTasksKit';
```

## getTaskInfo

```TypeScript
function getTaskInfo(taskId: number): Promise<TaskInfo>
```

Obtains the information of a background load task. This API returns the result via a promise.

**Since:** 26.0.0

**Required permissions:** ohos.permission.KEEP_BACKGROUND_RUNNING

**Model restriction:** This API can be used only in the stage model.

<!--Device-backgroundLoader-function getTaskInfo(taskId: int): Promise<TaskInfo>--><!--Device-backgroundLoader-function getTaskInfo(taskId: int): Promise<TaskInfo>-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| taskId | number | Yes | Id of the background load task.<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<TaskInfo> | Promise used to return the TaskInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | No permission. |
| [9700003](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700003-system-service-failure) | System service operation failed. |
| [9700004](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700004-workinfo-verification-failure) | Check on taskInfo failed. |

