# VideoScaleType

```TypeScript
enum VideoScaleType
```

Enumerates the video scale modes.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## VIDEO_SCALE_TYPE_FIT

```TypeScript
VIDEO_SCALE_TYPE_FIT = 0
```

Default mode. The video will be stretched to fit the window.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## VIDEO_SCALE_TYPE_FIT_CROP

```TypeScript
VIDEO_SCALE_TYPE_FIT_CROP = 1
```

Maintains the video's aspect ratio, and scales to fill the shortest side of the window, with the longer side cropped.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## VIDEO_SCALE_TYPE_SCALED_ASPECT

```TypeScript
VIDEO_SCALE_TYPE_SCALED_ASPECT = 2
```

Maintains the video's aspect ratio, and scales to fill the longer side of the window, with the shorter side centered and unfilled parts left black.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

