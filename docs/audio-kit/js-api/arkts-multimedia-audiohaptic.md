# @ohos.multimedia.audioHaptic

Audio-haptic enables users to get rhythmic auditory and haptic feedback while having incoming calls or messages. **Device behavior difference**: For a device without a vibration component, no vibration effect is generated.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AudioHaptic.Core

## Modules to Import

```TypeScript
import { audioHaptic } from '@kit.AudioKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAudioHapticManager](arkts-audiohaptic-getaudiohapticmanager-f.md#getAudioHapticManager-1) | Obtains an {@link AudioHapticManager} instance. This object is singleton in one process. |

### Interfaces

| Name | Description |
| --- | --- |
| [AudioHapticFileDescriptor](arkts-audiohaptic-audiohapticfiledescriptor-i.md) | Describes the audio-haptic file descriptor. > **NOTE** > > Ensure that **fd** is an available file descriptor and the values of **offset** and **length** are correct. |
| [AudioHapticManager](arkts-audiohaptic-audiohapticmanager-i.md) | Manages the audio-haptic feature. Before calling any API in AudioHapticManager, you must use [getAudioHapticManager]{@link audioHaptic.getAudioHapticManager} to create an AudioHapticManager instance. |
| [AudioHapticPlayer](arkts-audiohaptic-audiohapticplayer-i.md) | Implements audio-haptic playback. Before calling any API in AudioHapticPlayer, you must use [createPlayer]{@link audioHaptic.AudioHapticManager.createPlayer(id: number, options?: AudioHapticPlayerOptions)} to create an AudioHapticPlayer instance. |
| [AudioHapticPlayerOptions](arkts-audiohaptic-audiohapticplayeroptions-i.md) | Describes the options for the audio-haptic player. |

### Enums

| Name | Description |
| --- | --- |
| [AudioHapticType](arkts-audiohaptic-audiohaptictype-e.md) | Enumerates the audio haptic types. |
| [AudioLatencyMode](arkts-audiohaptic-audiolatencymode-e.md) | Enumerates the audio latency modes. |

