# AudioRendererOptions

Describes audio renderer configurations.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## rendererInfo

```TypeScript
rendererInfo: AudioRendererInfo
```

Describes audio renderer information.

**Type:** AudioRendererInfo

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## originalAppIdInfo

```TypeScript
originalAppIdInfo?: AppIdInfo
```

Indicates the original app ID of the audio stream.

**Type:** AppIdInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## streamInfo

```TypeScript
streamInfo: AudioStreamInfo
```

Describes audio stream information.

**Type:** AudioStreamInfo

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## privacyType

```TypeScript
privacyType?: AudioPrivacyType
```

Whether the audio stream can be recorded by other applications. The default value is **0**.

**Type:** AudioPrivacyType

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

