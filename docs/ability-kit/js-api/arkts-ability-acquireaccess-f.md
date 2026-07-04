# acquireAccess

## Modules to Import

```TypeScript
import { screenLockFileManager } from '@ohos.ability.screenLockFileManager';
```

## acquireAccess

```TypeScript
function acquireAccess(): AccessStatus
```

Acquire the access of the caller data under the lock screen.

**Since:** 12

**System capability:** SystemCapability.Security.ScreenLockFileManager

**Return value:**

| Type | Description |
| --- | --- |
| AccessStatus | Returns acquire the access result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | The specified SystemCapability name was not found. |
| [29300002](../errorcode-screenLockFileManager.md#29300002-system-service-abnormal) | The system ability works abnormally. |
| [29300003](../errorcode-screenLockFileManager.md#29300003-sensitive-data-access-management-under-lock-screen-is-not-enabled) | The application is not enabled the data protection under lock screen. |
| [29300004](../errorcode-screenLockFileManager.md#29300004-permission-to-access-sensitive-data-on-the-lock-screen-has-been-revoked) | File access is denied. |

**Example**

```TypeScript
// Request the permission to access sensitive data on the lock screen.
import { screenLockFileManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
    let acquireStatus = screenLockFileManager.acquireAccess();
    if (acquireStatus === screenLockFileManager.AccessStatus.ACCESS_GRANTED) {
        hilog.info(0x0000, 'testTag', 'acquireAccess successfully.');
    }
} catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'acquireAccess failed: %{public}s', message);
}

```

