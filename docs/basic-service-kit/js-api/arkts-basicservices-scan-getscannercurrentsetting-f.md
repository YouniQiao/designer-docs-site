# getScannerCurrentSetting

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## getScannerCurrentSetting

```TypeScript
function getScannerCurrentSetting(scannerId: string, optionIndex: number): Promise<ScannerOptionValue>
```

Obtains the current scanner settings. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

<!--Device-scan-function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>--><!--Device-scan-function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | Scanner ID. |
| optionIndex | number | Yes | Index of the option to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ScannerOptionValue> | Promise used to return the scanner option value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let scannerId: string = 'scanner_001';
let optionIndex: number = 1;
scan.getScannerCurrentSetting(scannerId, optionIndex).then((value: scan.ScannerOptionValue) => {
    console.info('get scanner current setting success: ' + JSON.stringify(value));
}).catch((error: BusinessError) => {
    console.error('get scanner current setting failed: ' + JSON.stringify(error));
})

```

