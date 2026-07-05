# queryAppKeyState

## queryAppKeyState

```TypeScript
function queryAppKeyState(): KeyStatus
```

Query the AppKey's status of the caller.

**Since:** 18

**System capability:** SystemCapability.Security.ScreenLockFileManager

**Return value:**

| Type | Description |
| --- | --- |
| KeyStatus | Returns the AppKey status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | The specified SystemCapability name was not found. |
| 29300002 | The system ability works abnormally. |

**Example**

```TypeScript
// Obtain the state of access permissions for sensitive data on the lock screen.
import { screenLockFileManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
    // Query the key status
    let keyStatus = screenLockFileManager.queryAppKeyState();
    // Determine the key status and handle different situations
    if (keyStatus === screenLockFileManager.KeyStatus.KEY_NOT_EXIST) {
        hilog.info(0x0000, 'testTag', 'Key does not exist.');
    } else if (keyStatus === screenLockFileManager.KeyStatus.KEY_RELEASED) {
        hilog.info(0x0000, 'testTag', 'Key has been released.');
    } else if (keyStatus === screenLockFileManager.KeyStatus.KEY_EXIST) {
        hilog.info(0x0000, 'testTag', 'Key exists.');
    }
} catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'queryAppKeyState failed: %{public}s', message);
}

```

