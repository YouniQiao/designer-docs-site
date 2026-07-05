# VideoScaleType

```TypeScript
enum VideoScaleType
```

枚举，视频缩放模式。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## VIDEO_SCALE_TYPE_FIT

```TypeScript
VIDEO_SCALE_TYPE_FIT = 0
```

默认比例类型，视频拉伸至与窗口等大。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## VIDEO_SCALE_TYPE_FIT_CROP

```TypeScript
VIDEO_SCALE_TYPE_FIT_CROP = 1
```

保持视频宽高比缩放至最短边填满窗口，长边超出窗口部分被裁剪。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## VIDEO_SCALE_TYPE_SCALED_ASPECT

```TypeScript
VIDEO_SCALE_TYPE_SCALED_ASPECT = 2
```

保持视频宽高比缩放至长边填满窗口，短边居中对齐，未填满部分留黑。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

