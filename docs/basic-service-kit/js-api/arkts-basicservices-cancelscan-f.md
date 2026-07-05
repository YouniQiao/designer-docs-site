# cancelScan

## Modules to Import

```TypeScript
import { scan } from '@ohos.scan';
```

## cancelScan

```TypeScript
function cancelScan(scannerId: string): Promise<void>
```

Cancels scanning. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | Scanner ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let scannerId: string = 'scanner_001';
scan.cancelScan(scannerId).then(() => {
    console.info('cancel scan success');
}).catch((error: BusinessError) => {
    console.error('cancel scan failed: ' + JSON.stringify(error));
})

```

