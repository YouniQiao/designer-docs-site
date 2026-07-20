# getAddedScanners (System API)

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## getAddedScanners

```TypeScript
function getAddedScanners(): Promise<ScannerDevice[]>
```

Obtains the added scanners. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-scan-function getAddedScanners(): Promise<ScannerDevice[]>--><!--Device-scan-function getAddedScanners(): Promise<ScannerDevice[]>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ScannerDevice[]> | Promise used to return the array of added scanners. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

scan.getAddedScanners().then((scanners: scan.ScannerDevice[]) => {
    console.info('get added scanners success: ' + JSON.stringify(scanners));
}).catch((error: BusinessError) => {
    console.error('get added scanners failed: ' + JSON.stringify(error));
})

```

