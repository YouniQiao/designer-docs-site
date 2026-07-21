# getPrinterInformationById

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

<a id="getprinterinformationbyid"></a>
## getPrinterInformationById

```TypeScript
function getPrinterInformationById(printerId: string): Promise<PrinterInformation>
```

Obtains printer information based on the printer ID. This API uses a promise to return the result.

**Since:** 14

**Required permissions:** ohos.permission.PRINT

<!--Device-print-function getPrinterInformationById(printerId: string): Promise<PrinterInformation>--><!--Device-print-function getPrinterInformationById(printerId: string): Promise<PrinterInformation>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | Printer ID used to obtain information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PrinterInformation&gt; | Promise used to return the printer information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let printerId : string = 'testPrinterId';
print.getPrinterInformationById(printerId).then((printerInformation : print.PrinterInformation) => {
    console.info('getPrinterInformationById data : ' + JSON.stringify(printerInformation));
}).catch((error: BusinessError) => {
    console.error('getPrinterInformationById error : ' + JSON.stringify(error));
})

```

