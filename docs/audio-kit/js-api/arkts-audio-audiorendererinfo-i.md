# AudioRendererInfo

Describes audio renderer information.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## content

```TypeScript
content?: ContentType
```

Audio content type.

**Type:** ContentType

**Since:** 8

**Deprecated since:** 10

**Substitutes:** usage

**System capability:** SystemCapability.Multimedia.Audio.Core

## rendererFlags

```TypeScript
rendererFlags: number
```

Flags that control the renderer behavior. Set this parameter to **0**.

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Audio.Core

## usage

```TypeScript
usage: StreamUsage
```

Audio stream usage.

**Type:** StreamUsage

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Audio.Core

## volumeMode

```TypeScript
volumeMode?: AudioVolumeMode
```

Audio volume mode config. If volumeMode is set to {@link AudioVolumeMode.APP_INDIVIDUAL}, this audio renderer will be affected by app volume percentage set by {@link setAppVolumePercentage}

**Type:** AudioVolumeMode

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

