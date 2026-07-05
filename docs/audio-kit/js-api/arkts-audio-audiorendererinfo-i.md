# AudioRendererInfo

Describes audio renderer information.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## rendererFlags

```TypeScript
rendererFlags: int
```

Flags that control the renderer behavior. Set this parameter to **0**.

**Type:** int

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## usage

```TypeScript
usage: StreamUsage
```

Audio stream usage.

**Type:** StreamUsage

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## content

```TypeScript
content?: ContentType
```

Audio content type.

**Type:** ContentType

**Since:** 8

**Deprecated since:** 10

**Substitute:** ohos.multimedia.audio.AudioRendererInfo#usage

**System capability:** SystemCapability.Multimedia.Audio.Core

## volumeMode

```TypeScript
volumeMode?: AudioVolumeMode
```

Audio volume mode config. If volumeMode is set to {@link AudioVolumeMode.APP_INDIVIDUAL}, this audio renderer will be affected by app volume percentage set by {@link setAppVolumePercentage}

**Type:** AudioVolumeMode

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

