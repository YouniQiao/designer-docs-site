# queryAllPrinterPpds (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## queryAllPrinterPpds

```TypeScript
function queryAllPrinterPpds(): Promise<PpdInfo[]>
```

Query all printer ppds.

**Since:** 24

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the stage model.

<!--Device-print-function queryAllPrinterPpds(): Promise<PpdInfo[]>--><!--Device-print-function queryAllPrinterPpds(): Promise<PpdInfo[]>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PpdInfo[]> | - Promise that resolves with all printer ppd info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |

