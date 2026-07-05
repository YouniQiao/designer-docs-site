# createAudioPlayer

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## createAudioPlayer

```TypeScript
function createAudioPlayer(): AudioPlayer
```

Creates an AudioPlayer instance in synchronous mode.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** createAVPlayer(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Return value:**

| Type | Description |
| --- | --- |
| AudioPlayer | If the operation is successful, an AudioPlayer instance is returned; otherwise, **null**is returned. After the instance is created, you can start, pause, or stop audio playback. |

**Example**

```TypeScript
let audioPlayer: media.AudioPlayer = media.createAudioPlayer();

```

