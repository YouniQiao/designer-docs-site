# getWakeupManager

## getWakeupManager

```TypeScript
function getWakeupManager(): WakeupManager
```

Obtains an {@link WakeupManager} instance.

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| WakeupManager | this {@link WakeupManager} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700101 | No memory. |
| 22700107 | System error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wakeupManager: intelligentVoice.WakeupManager | null = null;
try {
  wakeupManager = intelligentVoice.getWakeupManager();
} catch (err) {
  let error = err as BusinessError;
  console.error(`Get WakeupManager failed. Code:${error.code}, message:${error.message}`);
}

```

