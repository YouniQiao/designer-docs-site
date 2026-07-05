# getDLPSuffix

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## getDLPSuffix

```TypeScript
function getDLPSuffix(): string
```

Obtains the DLP file name extension. After the API is called successfully, the DLP file name extension (for example, .dlp) is returned. This API returns the result synchronously. This API is used to obtain the standard extension of the DLP file, which can be used to construct the DLP file name or the determination of the file type.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| string | DLP file name extension obtained. For example, if the original file name is **test.txt**, theencrypted DLP file name is **test.txt.dlp**, and the returned extension is **.dlp**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let dlpSuffix = dlpPermission.getDLPSuffix(); // Obtain the DLP file name extension.
console.info('dlpSuffix:', dlpSuffix);

```

