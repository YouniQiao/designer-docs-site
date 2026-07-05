# AVMetadata

The metadata of the current media.Used to set the properties of the current media file

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## avQueueImage

```TypeScript
avQueueImage?: image.PixelMap | string
```

The artwork of play list as a {@link PixelMap} or an uri formatted String,

**类型：** image.PixelMap | string

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## avQueueName

```TypeScript
avQueueName?: string
```

The name of play list which current media belongs to

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## artist

```TypeScript
artist?: string
```

The artist of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## drmSchemes

```TypeScript
drmSchemes?: Array<string>
```

The drm schemes supported by this session which are represented by uuid.

**类型：** Array<string>

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## publishDate

```TypeScript
publishDate?: Date
```

The publishDate of the media

**类型：** Date

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## fastForwardSkipIntervals

```TypeScript
fastForwardSkipIntervals?: SkipIntervals
```

The supported skipIntervals when doing fast forward operation, the default is {@link SECONDS_15}. The system will use this value for fastforward skip intervals instead of {@link skipIntervals}. If not set, the fast forward skip intervals still use {@link skipIntervals}. See {@link SkipIntervals}

**类型：** SkipIntervals

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## description

```TypeScript
description?: string
```

The description of the media, used for display

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## bundleIcon

```TypeScript
readonly bundleIcon?: image.PixelMap
```

The image of the bundle icon as a {@link PixelMap}, no need to be set by application.

**类型：** image.PixelMap

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## title

```TypeScript
title?: string
```

The title of this media, for display in media center.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## duration

```TypeScript
duration?: long
```

The duration of this media, used to automatically calculate playback position, described by milliseconds.

**类型：** long

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## displayTags

```TypeScript
displayTags?: int
```

The display tags supported by application to be displayed on media center

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## singleLyricText

```TypeScript
singleLyricText?: string
```

The single lyric text of the media, not including time prefix

**类型：** string

**起始版本：** 17

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## assetId

```TypeScript
assetId: string
```

Unique ID used to represent this media.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## composer

```TypeScript
composer?: string
```

The composer of this media

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## album

```TypeScript
album?: string
```

The album of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## author

```TypeScript
author?: string
```

The author of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## nextAssetId

```TypeScript
nextAssetId?: string
```

The next playable media id. Used to tell the controller if there is a next playable media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## avQueueId

```TypeScript
avQueueId?: string
```

The id of play list which current media belongs to, it should be an unique identifier in the application.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## previousAssetId

```TypeScript
previousAssetId?: string
```

The previous playable media id. Used to tell the controller if there is a previous playable media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## rewindSkipIntervals

```TypeScript
rewindSkipIntervals?: SkipIntervals
```

The supported skipIntervals when doing rewind operation, the default is {@link SECONDS_15}. The system will use this value for rewind skip intervals instead of {@link skipIntervals}. If not set, the rewind skip intervals still use {@link skipIntervals}. See {@link SkipIntervals}

**类型：** SkipIntervals

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## filter

```TypeScript
filter?: int
```

The protocols supported by this session, if not set, the default is {@link TYPE_CAST_PLUS_STREAM}. See {@link ProtocolType}

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## mediaImage

```TypeScript
mediaImage?: image.PixelMap | string
```

The image of the media as a {@link PixelMap} or an uri formatted String, used to display in media center.

**类型：** image.PixelMap | string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## lyric

```TypeScript
lyric?: string
```

The lyric of the media, it should be in standard lyric format

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## skipIntervals

```TypeScript
skipIntervals?: SkipIntervals
```

The supported skipIntervals when doing fast forward and rewind operation, the default is {@link SECONDS_15}. See {@link SkipIntervals}

**类型：** SkipIntervals

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## subtitle

```TypeScript
subtitle?: string
```

The subtitle of the media, used for display

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## writer

```TypeScript
writer?: string
```

The writer of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

