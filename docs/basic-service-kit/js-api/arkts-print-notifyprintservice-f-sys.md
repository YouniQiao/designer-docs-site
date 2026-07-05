# notifyPrintService

## notifyPrintService

```TypeScript
function notifyPrintService(jobId: string, type: 'spooler_closed_for_cancelled' | 'spooler_closed_for_started',
    callback: AsyncCallback<void>): void
```

将spooler关闭信息通知打印服务，使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 表示打印任务ID。 |
| type | 'spooler_closed_for_cancelled' \| 'spooler_closed_for_started' | Yes | 表示spooler关闭信息。 |
| callback | AsyncCallback&lt;void> | Yes | 异步将spooler关闭信息通知打印服务之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = '1';
print.notifyPrintService(jobId, 'spooler_closed_for_started', (err: BusinessError) => {
    if (err) {
        console.error('notifyPrintService failed, because : ' + JSON.stringify(err));
    } else {
        console.info('notifyPrintService success');
    }
})

```

## notifyPrintService

```TypeScript
function notifyPrintService(jobId: string,
    type: 'spooler_closed_for_cancelled' | 'spooler_closed_for_started'): Promise<void>
```

将spooler关闭信息通知打印服务，使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 表示打印任务ID。 |
| type | 'spooler_closed_for_cancelled' \| 'spooler_closed_for_started' | Yes | 表示spooler关闭信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = '1';
print.notifyPrintService(jobId, 'spooler_closed_for_started').then(() => {
    console.info('notifyPrintService success');
}).catch((error: BusinessError) => {
    console.error('notifyPrintService error : ' + JSON.stringify(error));
})

```

