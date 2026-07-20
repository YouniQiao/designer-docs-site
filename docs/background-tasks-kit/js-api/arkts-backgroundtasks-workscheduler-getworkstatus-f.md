# getWorkStatus

## Modules to Import

```TypeScript
import { workScheduler } from '@kit.BackgroundTasksKit';
```

## getWorkStatus

```TypeScript
function getWorkStatus(workId: number, callback: AsyncCallback<WorkInfo>): void
```

Obtains the information a deferred task. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-workScheduler-function getWorkStatus(workId: int, callback: AsyncCallback<WorkInfo>): void--><!--Device-workScheduler-function getWorkStatus(workId: int, callback: AsyncCallback<WorkInfo>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | number | Yes | ID of the deferred task. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<WorkInfo> | Yes | Callback used to return the result. If **workId** is valid, the task information obtained from WorkSchedulerService is returned. Otherwise, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Parameter verification failed. |
| [9700001](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700001-memory-operation-failure) | Memory operation failed. |
| [9700002](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700002-parcel-operation-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;2. Failed to apply for memory. |
| [9700003](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700003-system-service-failure) | System service operation failed. |
| [9700004](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700004-workinfo-verification-failure) | Check on workInfo failed. |

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
function getWorkStatus(workId: number): Promise<WorkInfo>
```

Obtains the information a deferred task. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-workScheduler-function getWorkStatus(workId: int): Promise<WorkInfo>--><!--Device-workScheduler-function getWorkStatus(workId: int): Promise<WorkInfo>-End-->

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | number | Yes | ID of the deferred task. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<WorkInfo> | Promise used to return the result. If **workId** is valid, the task information obtained from WorkSchedulerService is returned. Otherwise, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Parameter verification failed. |
| [9700001](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700001-memory-operation-failure) | Memory operation failed. |
| [9700002](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700002-parcel-operation-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;2. Failed to apply for memory. |
| [9700003](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700003-system-service-failure) | System service operation failed. |
| [9700004](../../apis-backgroundtasks-kit/errorcode-workScheduler.md#9700004-workinfo-verification-failure) | Check on workInfo failed. |

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

