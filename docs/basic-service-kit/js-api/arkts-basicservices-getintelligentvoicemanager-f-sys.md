# getIntelligentVoiceManager (System API)

## Modules to Import

```TypeScript
import { intelligentVoice } from '@ohos.ai.intelligentVoice';
```

## getIntelligentVoiceManager

```TypeScript
function getIntelligentVoiceManager(): IntelligentVoiceManager
```

Obtains an {@link IntelligentVoiceManager} instance.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| IntelligentVoiceManager | this {@link IntelligentVoiceManager} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [22700101](../../apis-basic-services-kit/errorcode-intelligentVoice.md#22700101-insufficient-memory) | No memory. |

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

