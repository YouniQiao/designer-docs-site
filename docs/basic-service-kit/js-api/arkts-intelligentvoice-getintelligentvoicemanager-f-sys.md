# getIntelligentVoiceManager

## getIntelligentVoiceManager

```TypeScript
function getIntelligentVoiceManager(): IntelligentVoiceManager
```

Obtains an {@link IntelligentVoiceManager} instance.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| IntelligentVoiceManager | this {@link IntelligentVoiceManager} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700101 | No memory. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let intelligentVoiceManager: intelligentVoice.IntelligentVoiceManager | null = null;
try {
  intelligentVoiceManager = intelligentVoice.getIntelligentVoiceManager();
} catch (err) {
  let error = err as BusinessError;
  console.error(`Get IntelligentVoiceManager failed. Code:${error.code}, message:${error.message}`);
}

```

