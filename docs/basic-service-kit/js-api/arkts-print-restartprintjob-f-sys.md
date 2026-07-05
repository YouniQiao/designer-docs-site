# restartPrintJob

## restartPrintJob

```TypeScript
function restartPrintJob(jobId: string): Promise<void>
```

重新打印之前打印过的打印任务，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 之前打印过的打印任务ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = '121212';
print.restartPrintJob(jobId).then(() => {
    console.info('restartPrintJob success');
}).catch((error: BusinessError) => {
    console.error('restartPrintJob failed, because : ' + JSON.stringify(error));
})

```

