# HdrGainmapMetadata

Gainmap使用的元数据值，[HdrMetadataKey]image.HdrMetadataKey中HDR_GAINMAP_METADATA关键字对应的值，参考ISO 21496-1。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## useBaseColorFlag

```TypeScript
useBaseColorFlag: boolean
```

Indicate whether to use the color space of the base image.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## baseHeadroom

```TypeScript
baseHeadroom: double
```

The baseline hdr headroom.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## miniVersion

```TypeScript
miniVersion: int
```

The minimum version a parser needs to understand.

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## alternateHeadroom

```TypeScript
alternateHeadroom: double
```

The alternate hdr headroom.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## channels

```TypeScript
channels: Array<GainmapChannel>
```

The per-channel metadata.

**Type:** Array<GainmapChannel>

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## gainmapChannelCount

```TypeScript
gainmapChannelCount: int
```

The number of gain map channels, with a value of 1 or 3.

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## writerVersion

```TypeScript
writerVersion: int
```

The version used by the writer.

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

