# getWorkStatus

## getWorkStatus

```TypeScript
function getWorkStatus(workId: int, callback: AsyncCallback<WorkInfo>): void
```

通过workId获取延迟任务，使用Callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | int | Yes | 延迟任务Id。 |
| callback | AsyncCallback&lt;WorkInfo> | Yes | 回调函数。如果workId有效，则返回从WorkSchedulerService获取的任务，否则抛出异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Parameter verification failed. |
| 9700001 | Memory operation failed. |
| 9700002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9700003 | System service operation failed. |
| 9700004 | Check on workInfo failed. |

**Example**

```TypeScript
  import { BusinessError } from '@kit.BasicServicesKit';
  import { workScheduler } from '@kit.BackgroundTasksKit';

  workScheduler.getWorkStatus(50, (error: BusinessError, res: workScheduler.WorkInfo) => {
    if (error) {
      console.error(`workschedulerLog getWorkStatus failed. code is ${error.code} message is ${error.message}`);
    } else {
      console.info(`workschedulerLog getWorkStatus success, ${JSON.stringify(res)}`);
    }
  });

```

## getWorkStatus

```TypeScript
function getWorkStatus(workId: int): Promise<WorkInfo>
```

通过workId获取延迟任务，使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | int | Yes | 延迟任务Id。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WorkInfo> | Promise对象，如果workId有效，则返回从WorkSchedulerService获取的任务，否则抛出异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Parameter verification failed. |
| 9700001 | Memory operation failed. |
| 9700002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9700003 | System service operation failed. |
| 9700004 | Check on workInfo failed. |

**Example**

```TypeScript
  import { BusinessError } from '@kit.BasicServicesKit';
  import { workScheduler } from '@kit.BackgroundTasksKit';

  workScheduler.getWorkStatus(50).then((res: workScheduler.WorkInfo) => {
    console.info(`workschedulerLog getWorkStatus success, ${JSON.stringify(res)}`);
  }).catch((error: BusinessError) => {
    console.error(`workschedulerLog getWorkStatus failed. code is ${error.code} message is ${error.message}`);
  })

```

