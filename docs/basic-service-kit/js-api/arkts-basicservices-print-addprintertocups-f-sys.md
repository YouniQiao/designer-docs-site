# addPrinterToCups (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

<a id="addprintertocups"></a>
## addPrinterToCups

```TypeScript
function addPrinterToCups(printerUri: string, printerName: string, printerMake: string): Promise<boolean>
```

Add a printer to cups.

**Since:** 24

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the stage model.

<!--Device-print-function addPrinterToCups(printerUri: string, printerName: string, printerMake: string): Promise<boolean>--><!--Device-print-function addPrinterToCups(printerUri: string, printerName: string, printerMake: string): Promise<boolean>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerUri | string | Yes | Indicates the printer uri.<br>Printer URI in the process of connecting. |
| printerName | string | Yes | Indicates the printer name.<br>Printer name in the process of connecting. |
| printerMake | string | Yes | Indicates the printer make.<br>Printer make in the process of connecting. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |
| [13100003](../../apis-basic-services-kit/errorcode-print.md#13100003-print-service-error) | Add a printer to cups failed. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let printerUri : string = "testPrinterUri";
let printerName : string = "testPrinterName";
let printerMake : string = "testPrinterMake";

print.addPrinterToCups(printerUri, printerName, printerMake).then((result: boolean) => {
    console.info('addPrinterToCups success' + JSON.stringify(result));
}).catch((error: BusinessError) => {
    console.error('addPrinterToCups error : ' + JSON.stringify(error));
})

```

