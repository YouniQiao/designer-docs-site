# deleteScanner (System API)

## Modules to Import

```TypeScript
import { scan } from '@ohos.scan';
```

## deleteScanner

```TypeScript
function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>
```

Deletes a scanner. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueId | string | Yes | Unique ID of the scanner. |
| discoveryMode | ScannerDiscoveryMode | Yes | Discovery mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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
scan.deleteScanner(uniqueId, discoveryMode).then(() => {
    console.info('delete scanner success');
}).catch((error: BusinessError) => {
    console.error('delete scanner failed: ' + JSON.stringify(error));
})

```

