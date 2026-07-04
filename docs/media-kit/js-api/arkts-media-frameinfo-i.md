# FrameInfo

Defines the frame info when fetch picture form a video.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## actualTimeUs

```TypeScript
actualTimeUs?: number
```

The actual frame time.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

## image

```TypeScript
image?: image.PixelMap
```

The image extracted from video.

**Type:** image.PixelMap

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

## requestedTimeUs

```TypeScript
requestedTimeUs: number
```

The requested frame time.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

## result

```TypeScript
result: FetchResult
```

The fetch result code - succeed, failed or cancelled.

**Type:** FetchResult

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVMetadataExtractor

