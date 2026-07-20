# addScanner (System API)

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## addScanner

```TypeScript
function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>
```

Adds a scanner. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-scan-function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>--><!--Device-scan-function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueId | string | Yes | Unique ID of the scanner. |
| discoveryMode | [ScannerDiscoveryMode](arkts-basicservices-scan-scannerdiscoverymode-e.md) | Yes | Discovery mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uniqueId: string = 'unique_scanner_001';
let discoveryMode: scan.ScannerDiscoveryMode = scan.ScannerDiscoveryMode.TCP_STR;
scan.addScanner(uniqueId, discoveryMode).then(() => {
    console.info('add scanner success');
}).catch((error: BusinessError) => {
    console.error('add scanner failed: ' + JSON.stringify(error));
})

```

