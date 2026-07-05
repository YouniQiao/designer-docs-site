# getAudioHapticManager

## getAudioHapticManager

```TypeScript
function getAudioHapticManager(): AudioHapticManager
```

Obtains an {@link AudioHapticManager} instance. This object is singleton in one process.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioHapticManager | AudioHapticManager instance. |

**示例：**

```TypeScript
let audioHapticManagerInstance: audioHaptic.AudioHapticManager = audioHaptic.getAudioHapticManager();

```

