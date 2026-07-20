# queryPrinterCapabilityByUri (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## queryPrinterCapabilityByUri

```TypeScript
function queryPrinterCapabilityByUri(printerUri: string, printerId: string): Promise<PrinterCapabilities>
```

Query printer capabilityies by printer uri.

**Since:** 24

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the stage model.

<!--Device-print-function queryPrinterCapabilityByUri(printerUri: string, printerId: string): Promise<PrinterCapabilities>--><!--Device-print-function queryPrinterCapabilityByUri(printerUri: string, printerId: string): Promise<PrinterCapabilities>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerUri | string | Yes | Indicates the printer uri.<br>Printer URI in the process of connecting. |
| printerId | string | Yes | Indicates the printer ID.<br>Printer ID in the process of connecting. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PrinterCapabilities> | - Promise that resolves with the printer capabilityies. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |
| [13100005](../../apis-basic-services-kit/errorcode-print.md#13100005-invalid-printer) | Can not find the printer in system. |

