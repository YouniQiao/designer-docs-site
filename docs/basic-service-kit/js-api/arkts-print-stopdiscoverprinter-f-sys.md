# stopDiscoverPrinter

## stopDiscoverPrinter

```TypeScript
function stopDiscoverPrinter(callback: AsyncCallback<void>): void
```

停止发现打印机，使用callback异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_PRINT_JOB

- API version20 and later: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 停止发现打印机的异步回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

print.stopDiscoverPrinter((err: BusinessError) => {
    if (err) {
        console.error('failed to stop Discover Printer because : ' + JSON.stringify(err));
    } else {
        console.info('stop Discover Printer success');
    }
})

```

## stopDiscoverPrinter

```TypeScript
function stopDiscoverPrinter(): Promise<void>
```

停止发现打印机，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_PRINT_JOB

- API version20 and later: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

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

print.stopDiscoverPrinter().then(() => {
    console.info('stop Discovery success');
}).catch((error: BusinessError) => {
    console.error('failed to stop Discovery because : ' + JSON.stringify(error));
})

```

