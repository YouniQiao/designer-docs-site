# @ohos.multimedia.audioHaptic

Audio-haptic enables users to get rhythmic auditory and haptic feedback while having incoming calls or messages. **Device behavior difference**: For a device without a vibration component, no vibration effect is generated.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

## 导入模块

```TypeScript
import { audioHaptic } from '@kit.AudioKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getAudioHapticManager](arkts-audiohaptic-getaudiohapticmanager-f.md#getAudioHapticManager-1) | Obtains an {@link AudioHapticManager} instance. This object is singleton in one process. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AudioHapticFileDescriptor](arkts-audiohaptic-audiohapticfiledescriptor-i.md) | Describes the audio-haptic file descriptor. > **NOTE** > > Ensure that **fd** is an available file descriptor and the values of **offset** and **length** are correct. |
| [AudioHapticManager](arkts-audiohaptic-audiohapticmanager-i.md) | Manages the audio-haptic feature. Before calling any API in AudioHapticManager, you must use [getAudioHapticManager]{@link audioHaptic.getAudioHapticManager} to create an AudioHapticManager instance. |
| [AudioHapticPlayer](arkts-audiohaptic-audiohapticplayer-i.md) | Implements audio-haptic playback. Before calling any API in AudioHapticPlayer, you must use [createPlayer]{@link audioHaptic.AudioHapticManager.createPlayer(id: number, options?: AudioHapticPlayerOptions)} to create an AudioHapticPlayer instance. |
| [AudioHapticPlayerOptions](arkts-audiohaptic-audiohapticplayeroptions-i.md) | Describes the options for the audio-haptic player. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AudioHapticType](arkts-audiohaptic-audiohaptictype-e.md) | Enumerates the audio haptic types. |
| [AudioLatencyMode](arkts-audiohaptic-audiolatencymode-e.md) | Enumerates the audio latency modes. |

