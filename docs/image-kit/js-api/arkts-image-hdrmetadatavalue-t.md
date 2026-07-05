# HdrMetadataValue

```TypeScript
type HdrMetadataValue = HdrMetadataType | HdrStaticMetadata | ArrayBuffer | HdrGainmapMetadata
```

PixelMap使用的HDR元数据值类型，与[HdrMetadataKey]image.HdrMetadataKey关键字对应。

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

| Type | Description |
| --- | --- |
| HdrMetadataType | Metadata value corresponding to the HDR_METADATA_TYPE key in  [HdrMetadataKey]{ |
| HdrStaticMetadata | Metadata value corresponding to the HDR_STATIC_METADATA key in  [HdrMetadataKey]{ |
| ArrayBuffer | Metadata value corresponding to the HDR_DYNAMIC_METADATA key in  [HdrMetadataKey]{ |
| HdrGainmapMetadata | Metadata value corresponding to the HDR_GAINMAP_METADATA key in  [HdrMetadataKey]{ |

