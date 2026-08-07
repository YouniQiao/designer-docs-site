# getOriginalFileName

## getOriginalFileName

```TypeScript
function getOriginalFileName(fileName: string): string
```

Obtains the original name of a DLP file. This API returns the result synchronously.

Determine the file type based on the original file name extension and select an application to open the file.

**Since:** 10

**ArkTS mode:** ArkTS-Dyn only, since version 10.

<!--Device-dlpPermission-function getOriginalFileName(fileName: string): string--><!--Device-dlpPermission-function getOriginalFileName(fileName: string): string-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fileName | string | Yes | Name of the target DLP file. The value contains 1 to 255 bytes. If the value is out of range, error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Original name of the DLP file obtained. For example, if the DLP file name is **test.txt.dlp** , the original file name returned is **test.txt**. The value contains up to 255 bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let res = dlpPermission.getOriginalFileName('test.txt.dlp'); // Obtain the original file name.
  console.info('res', res);
} catch (err) {
  console.error('error', (err as BusinessError).code, (err as BusinessError).message); // Throw an error if the operation fails.
}
```

