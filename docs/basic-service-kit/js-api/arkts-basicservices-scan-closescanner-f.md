# closeScanner

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## closeScanner

```TypeScript
function closeScanner(scannerId: string): Promise<void>
```

Closes a scanner. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

<!--Device-scan-function closeScanner(scannerId: string): Promise<void>--><!--Device-scan-function closeScanner(scannerId: string): Promise<void>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | ID of the scanner to be closed. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let scannerId: string = 'scanner_001';
scan.closeScanner(scannerId).then(() => {
    console.info('close scanner success');
}).catch((error: BusinessError) => {
    console.error('close scanner failed: ' + JSON.stringify(error));
})

```

