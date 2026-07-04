# @ohos.multimedia.audioHaptic

Audio-haptic enables users to get rhythmic auditory and haptic feedback while having incoming calls or messages. **Device behavior difference**: For a device without a vibration component, no vibration effect is generated.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AudioHaptic.Core

## Modules to Import

```TypeScript
import { audioHaptic } from '@ohos.multimedia.audioHaptic';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAudioHapticManager](arkts-audio-getaudiohapticmanager-f.md#getaudiohapticmanager-1) | Obtains an {@link AudioHapticManager} instance. This object is singleton in one process. |

### Interfaces

| Name | Description |
| --- | --- |
| [AudioHapticFileDescriptor](arkts-audio-audiohapticfiledescriptor-i.md) | Describes the audio-haptic file descriptor. &gt; **NOTE** &gt; &gt; Ensure that **fd** is an available file descriptor and the values of **offset** and **length** are correct. |
| [AudioHapticManager](arkts-audio-audiohapticmanager-i.md) | Manages the audio-haptic feature. Before calling any API in AudioHapticManager, you must use [getAudioHapticManager](arkts-audio-getaudiohapticmanager-f.md#getaudiohapticmanager-1) to create an AudioHapticManager instance. |
| [AudioHapticPlayer](arkts-audio-audiohapticplayer-i.md) | Implements audio-haptic playback. Before calling any API in AudioHapticPlayer, you must use [createPlayer](arkts-audio-audiohapticmanager-i.md#createplayer-1) to create an AudioHapticPlayer instance. |
| [AudioHapticPlayerOptions](arkts-audio-audiohapticplayeroptions-i.md) | Describes the options for the audio-haptic player. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AudioHapticPlayer](arkts-audio-audiohapticplayer-i-sys.md) | Implements audio-haptic playback. Before calling any API in AudioHapticPlayer, you must use [createPlayer](arkts-audio-audiohapticmanager-i.md#createplayer-1) to create an AudioHapticPlayer instance. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AudioHapticType](arkts-audio-audiohaptictype-e.md) | Enumerates the audio haptic types. |
| [AudioLatencyMode](arkts-audio-audiolatencymode-e.md) | Enumerates the audio latency modes. |

