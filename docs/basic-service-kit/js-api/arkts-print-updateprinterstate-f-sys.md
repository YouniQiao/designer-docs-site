# updatePrinterState

## updatePrinterState

```TypeScript
function updatePrinterState(printerId: string, state: PrinterState, callback: AsyncCallback<void>): void
```

更新打印机状态，使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 表示打印机ID。 |
| state | PrinterState | Yes | 表示打印机状态。 |
| callback | AsyncCallback&lt;void> | Yes | 异步更新打印机状态之后的回调。 |

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
let state : print.PrinterState = print.PrinterState.PRINTER_CONNECTED;
print.updatePrinterState(printerId, state, (err: BusinessError) => {
    if (err) {
        console.error('updatePrinterState failed, because : ' + JSON.stringify(err));
    } else {
        console.info('updatePrinterState success');
    }
})

```

## updatePrinterState

```TypeScript
function updatePrinterState(printerId: string, state: PrinterState): Promise<void>
```

更新打印机状态，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 表示打印机ID。 |
| state | PrinterState | Yes | 表示打印机状态。 |

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
let state : print.PrinterState = print.PrinterState.PRINTER_CONNECTED;
print.updatePrinterState(printerId, state).then(() => {
    console.info('update printer state success');
}).catch((error: BusinessError) => {
    console.error('update printer state error : ' + JSON.stringify(error));
})

```

