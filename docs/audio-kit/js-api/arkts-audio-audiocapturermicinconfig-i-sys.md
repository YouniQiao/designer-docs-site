# AudioCapturerMicInConfig (System API)

Describes audio capturer configuration that can capture microphone input (mic-in) audio data before any processing.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## capturerInfo

```TypeScript
capturerInfo: AudioCapturerInfo
```

Capturer attribute information.

**Type:** AudioCapturerInfo

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## ecStreamInfo

```TypeScript
ecStreamInfo?: AudioStreamInfo
```

Stream information that describes echo reference signal. If not set this attribute, the capturer will only record Mic-In audio stream.

**Type:** AudioStreamInfo

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## micInStreamInfo

```TypeScript
micInStreamInfo: AudioStreamInfo
```

Stream information that describes Mic-In audio stream.

**Type:** AudioStreamInfo

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## processedStreamInfo

```TypeScript
processedStreamInfo?: AudioStreamInfo
```

Stream information that describes the processed audio stream.

**Type:** AudioStreamInfo

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

