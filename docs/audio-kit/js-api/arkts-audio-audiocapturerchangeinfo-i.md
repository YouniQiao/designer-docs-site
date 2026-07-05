# AudioCapturerChangeInfo

Describes the audio capturer change event.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## clientUid

```TypeScript
readonly clientUid: int
```

Uid for audio capturer client application.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## streamId

```TypeScript
readonly streamId: int
```

Unique ID of an audio stream.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## capturerState

```TypeScript
readonly capturerState: AudioState
```

Audio state.

**Type:** AudioState

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## capturerInfo

```TypeScript
readonly capturerInfo: AudioCapturerInfo
```

Audio capturer information.

**Type:** AudioCapturerInfo

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## deviceDescriptors

```TypeScript
readonly deviceDescriptors: AudioDeviceDescriptors
```

Audio device information.

**Type:** AudioDeviceDescriptors

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## muted

```TypeScript
readonly muted?: boolean
```

Whether the audio capturer is muted. **true** if muted, **false** otherwise.

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

