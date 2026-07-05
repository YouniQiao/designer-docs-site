# cancelPrintJob

## cancelPrintJob

```TypeScript
function cancelPrintJob(jobId: string, callback: AsyncCallback<void>): void
```

取消已发送到打印机的打印任务，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 打印任务ID。 |
| callback | AsyncCallback&lt;void> | Yes | 异步取消已发送到打印机的打印任务之后的回调。 |

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

let jobId : string = '121212';
print.cancelPrintJob(jobId, (err: BusinessError) => {
    if (err) {
        console.error('cancelPrintJob failed, because : ' + JSON.stringify(err));
    } else {
        console.info('cancelPrintJob success');
    }
})

```

## cancelPrintJob

```TypeScript
function cancelPrintJob(jobId: string): Promise<void>
```

取消已发送到打印机的打印任务，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 打印任务ID。 |

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

let jobId : string = '121212';
print.cancelPrintJob(jobId).then(() => {
    console.info('cancelPrintJob success');
}).catch((error: BusinessError) => {
    console.error('cancelPrintJob failed, because : ' + JSON.stringify(error));
})

```

