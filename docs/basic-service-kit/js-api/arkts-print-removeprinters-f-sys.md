# removePrinters

## removePrinters

```TypeScript
function removePrinters(printerIds: Array<string>, callback: AsyncCallback<void>): void
```

移除打印机，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerIds | Array&lt;string> | Yes | 表示需移除的打印机列表。 |
| callback | AsyncCallback&lt;void> | Yes | 异步移除打印机之后的回调。 |

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

let printerId : string = '1212';
print.removePrinters([printerId], (err: BusinessError) => {
    if (err) {
        console.error('removePrinters failed, because : ' + JSON.stringify(err));
    } else {
        console.info('removePrinters success');
    }
})

```

## removePrinters

```TypeScript
function removePrinters(printerIds: Array<string>): Promise<void>
```

移除打印机，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerIds | Array&lt;string> | Yes | 表示需移除的打印机列表。 |

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

let printerId : string = '1212';
print.removePrinters([printerId]).then(() => {
    console.info('remove printers success');
}).catch((error: BusinessError) => {
    console.error('remove printers error : ' + JSON.stringify(error));
})

```

