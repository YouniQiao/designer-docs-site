# getAudioHapticManager

## Modules to Import

```TypeScript
import { audioHaptic } from '@ohos.multimedia.audioHaptic';
```

## getAudioHapticManager

```TypeScript
function getAudioHapticManager(): AudioHapticManager
```

Obtains an {@link AudioHapticManager} instance. This object is singleton in one process.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AudioHaptic.Core

**Return value:**

| Type | Description |
| --- | --- |
| AudioHapticManager | AudioHapticManager instance. |

**Example**

```TypeScript
let audioHapticManagerInstance: audioHaptic.AudioHapticManager = audioHaptic.getAudioHapticManager();

```

