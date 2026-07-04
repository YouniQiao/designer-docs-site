# getPictureScanProgress

## Modules to Import

```TypeScript
import { scan } from '@ohos.scan';
```

## getPictureScanProgress

```TypeScript
function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>
```

Obtains the progress of scanning a picture. This API uses a promise to return the result.

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
| Promise&lt;PictureScanProgress&gt; | Promise used to return the progress. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let scannerId: string = 'scanner_001';
scan.getPictureScanProgress(scannerId).then((progress: scan.PictureScanProgress) => {
    console.info('get picture scan progress success: ' + JSON.stringify(progress));
}).catch((error: BusinessError) => {
    console.error('get picture scan progress failed: ' + JSON.stringify(error));
})

```

