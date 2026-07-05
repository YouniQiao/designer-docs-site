# AudioCapturerMicInData

Describes audio capturer data that contains processed audio data and microphone input (mic-in) audio data before any processing.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## micInData

```TypeScript
micInData: ArrayBuffer
```

Microphone input audio data buffer.

**Type:** ArrayBuffer

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## ecData

```TypeScript
ecData?: ArrayBuffer
```

Echo reference audio data buffer. If capturer config does not set ecStreamInfo, this buffer will be null. See {@link #AudioCapturerMicInConfig} for details.

**Type:** ArrayBuffer

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## data

```TypeScript
data: ArrayBuffer
```

Processed audio data buffer.

**Type:** ArrayBuffer

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

