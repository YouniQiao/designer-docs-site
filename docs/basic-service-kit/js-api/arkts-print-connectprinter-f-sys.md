# connectPrinter

## connectPrinter

```TypeScript
function connectPrinter(printerId: string, callback: AsyncCallback<void>): void
```

通过打印机ID连接打印机，使用callback异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_PRINT_JOB

- API version20 and later: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 打印机ID。 |
| callback | AsyncCallback&lt;void> | Yes | 通过打印机ID异步连接打印机的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let printerId: string = 'printerId_32';
print.connectPrinter(printerId, (err: BusinessError) => {
    if (err) {
        console.error('failed to connect Printer because : ' + JSON.stringify(err));
    } else {
        console.info('start connect Printer success');
    }
})

```

## connectPrinter

```TypeScript
function connectPrinter(printerId: string): Promise<void>
```

通过打印机ID连接打印机，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_PRINT_JOB

- API version20 and later: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 打印机ID |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let printerId: string = 'printerId_32';
print.connectPrinter(printerId).then(() => {
    console.info('start connect Printer success');
}).catch((error: BusinessError) => {
    console.error('failed to connect Printer because : ' + JSON.stringify(error));
})

```

