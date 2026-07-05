# getBackupVersion

## getBackupVersion

```TypeScript
function getBackupVersion(): string
```

Obtain the backupVersion.

**Since:** 18

**Required permissions:** 

 ohos.permission.BACKUP

**System capability:** SystemCapability.FileManagement.StorageService.Backup

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the backupVersion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Permission verification failed, application which is not a system application uses system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { backup } from '@kit.CoreFileKit';

function getBackupVersion() {
  try {
    let result = backup.getBackupVersion();
    console.info('getBackupVersion success, result: ' + result);
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`getBackupVersion failed. Code: ${err.code}, message: ${err.message}`);
  }
}


{ "backupVersion" : "16.0" }

```

