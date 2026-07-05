# isLastWorkTimeOut

## isLastWorkTimeOut

```TypeScript
function isLastWorkTimeOut(workId: number, callback: AsyncCallback<void>): boolean
```

检查延迟任务的最后一次执行是否超时，使用Callback异步回调。

**Since:** 9

**Deprecated since:** 10

**Substitute:** workScheduler.isLastWorkTimeOut(workId:

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | number | Yes | 指定延迟任务的Id。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查延迟任务最后一次执行是否超时，如果workId有效，则返回从WorkSchedulerService获取的任务最后一次执行是否超时；否则，抛出异常。true，对应workId延迟任务最  后一次执行超时，false，对应workId延迟任务最后一次执行未超时。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: Parameter verification failed. |
| 9700001 | Memory operation failed. |
| 9700002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;  2. Failed to apply for memory. |
| 9700003 | System service operation failed. |
| 9700004 | Check on workInfo failed. |

## isLastWorkTimeOut

```TypeScript
function isLastWorkTimeOut(workId: int, callback: AsyncCallback<boolean>): void
```

检查延迟任务的最后一次执行是否超时，使用Callback异步回调。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | int | Yes | 指定延迟任务的Id。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。 |

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

  workScheduler.isLastWorkTimeOut(500, (error: BusinessError, res: boolean) =>{
    if (error) {
      console.error(`workschedulerLog isLastWorkTimeOut failed. code is ${error.code} message is ${error.message}`);
    } else {
      console.info(`workschedulerLog isLastWorkTimeOut success, data is: ${res}`);
    }
  });

```

## isLastWorkTimeOut

```TypeScript
function isLastWorkTimeOut(workId: int): Promise<boolean>
```

检查延迟任务的最后一次执行是否超时，使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| workId | int | Yes | 指定延迟任务的Id。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示指定任务的最后一次执行超时，false表示未超时。 |

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

  workScheduler.isLastWorkTimeOut(500)
    .then((res: boolean) => {
      console.info(`workschedulerLog isLastWorkTimeOut success, data is: ${res}`);
    })
    .catch((error: BusinessError) =>  {
      console.error(`workschedulerLog isLastWorkTimeOut failed. code is ${error.code} message is ${error.message}`);
    });

```

