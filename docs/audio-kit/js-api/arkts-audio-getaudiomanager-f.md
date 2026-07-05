# getAudioManager

## getAudioManager

```TypeScript
function getAudioManager(): AudioManager
```

Obtains an AudioManager instance.

**Since:** 7

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| AudioManager | AudioManager instance. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioManager = audio.getAudioManager();

```

