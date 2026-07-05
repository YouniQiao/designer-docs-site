# getSystemSoundManager (System API)

## Modules to Import

```TypeScript
import { systemSoundManager } from '@ohos.multimedia.systemSoundManager';
```

## getSystemSoundManager

```TypeScript
function getSystemSoundManager(): SystemSoundManager
```

Gets system sound manager for all type sound.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| SystemSoundManager | SystemSoundManager instance. |

**Example**

```TypeScript
let systemSoundManagerInstance: systemSoundManager.SystemSoundManager = systemSoundManager.getSystemSoundManager();

```

