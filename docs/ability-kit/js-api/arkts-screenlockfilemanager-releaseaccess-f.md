# releaseAccess

## releaseAccess

```TypeScript
function releaseAccess(): ReleaseStatus
```

Release the access of the caller data and do not allow data access under the lock screen.

**Since:** 12

**System capability:** SystemCapability.Security.ScreenLockFileManager

**Return value:**

| Type | Description |
| --- | --- |
| ReleaseStatus | Returns release the access result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | The specified SystemCapability name was not found. |
| 29300002 | The system ability works abnormally. |
| 29300003 | The application is not enabled the data protection under lock screen. |
| 29300005 | File access was not acquired. |

**Example**

```TypeScript
// Release the permission to access sensitive data on the lock screen.
import { screenLockFileManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
    // Release access permission
    let releaseStatus = screenLockFileManager.releaseAccess();
    if (releaseStatus === screenLockFileManager.ReleaseStatus.RELEASE_GRANTED) {
        hilog.info(0x0000, 'testTag', 'releaseAccess successfully.');
    }
} catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'releaseAccess failed: %{public}s', message);
}

```

