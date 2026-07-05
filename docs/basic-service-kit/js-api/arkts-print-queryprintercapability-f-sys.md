# queryPrinterCapability

## queryPrinterCapability

```TypeScript
function queryPrinterCapability(printerId: string, callback: AsyncCallback<void>): void
```

查询打印机能力，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 打印机ID。 |
| callback | AsyncCallback&lt;void> | Yes | 异步查询打印机能力之后的回调。 |

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

let printerId: string = 'printerId_32';
print.queryPrinterCapability(printerId, (err: BusinessError) => {
    if (err) {
        console.error('failed to query Printer Capability because : ' + JSON.stringify(err));
    } else {
        console.info('start query Printer Capability success');
    }
})

```

## queryPrinterCapability

```TypeScript
function queryPrinterCapability(printerId: string): Promise<void>
```

查询打印机能力，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 打印机ID。 |

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

let printerId: string = 'printerId_32';
print.queryPrinterCapability(printerId).then(() => {
    console.info('start query Printer success');
}).catch((error: BusinessError) => {
    console.error('failed to query Printer Capability because : ' + JSON.stringify(error));
})

```

