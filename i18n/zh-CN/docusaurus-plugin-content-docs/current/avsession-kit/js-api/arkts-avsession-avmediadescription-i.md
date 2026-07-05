# AVMediaDescription

The description of the media for an item in the playlist of the session

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## lyricUri

```TypeScript
lyricUri?: string
```

The lyric uri of the media.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## artist

```TypeScript
artist?: string
```

The artist of this media.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## appName

```TypeScript
appName?: string
```

Application name.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## mediaUri

```TypeScript
mediaUri?: string
```

The uri of the media, used to locate the media in some special cases

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## extras

```TypeScript
extras?: {[key: string]: Object}
```

Any additional attributes that can be represented as key-value pairs

**类型：** {[key: string]: Object}

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

```TypeScript
extras?: Record<string, Object>
```

Any additional attributes that can be represented as key-value pairs

**类型：** Record<string, Object>

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## description

```TypeScript
description?: string
```

The description of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## drmScheme

```TypeScript
drmScheme?: string
```

The drm scheme supported by this resource which is represented by uuid.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## fdSrc

```TypeScript
fdSrc?: media.AVFileDescriptor
```

Media file descriptor.

**类型：** media.AVFileDescriptor

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## mediaType

```TypeScript
mediaType?: string
```

The type of this media, such as video, audio and so on.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

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

## startPosition

```TypeScript
startPosition?: int
```

Media start position, described by milliseconds.

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## pcmSrc

```TypeScript
pcmSrc?: boolean
```

Source type that supports PCM casting. The application can send PCM data directly to the system through audio APIs, without using AVSession to set data.

**类型：** boolean

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## lyricContent

```TypeScript
lyricContent?: string
```

The lyric content of the media, it should be in standard lyric format

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## creditsPosition

```TypeScript
creditsPosition?: int
```

Media credits position, described by milliseconds.

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## duration

```TypeScript
duration?: int
```

The duration of this media, described by milliseconds.

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## mediaSize

```TypeScript
mediaSize?: int
```

The size of this media.

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## mediaImage

```TypeScript
mediaImage?: image.PixelMap | string
```

The image of this media asset displayed in the media center. It can be a {@link PixelMap} or a URI formatted string,

**类型：** image.PixelMap | string

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

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

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

## subtitle

```TypeScript
subtitle?: string
```

The subtitle of the media, used for display

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## albumTitle

```TypeScript
albumTitle?: string
```

The album title of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## launchClientData

```TypeScript
launchClientData?: string
```

Custom data sent by the application to the receiver during casting.

**类型：** string

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## albumCoverUri

```TypeScript
albumCoverUri?: string
```

The album cover uri of this media

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## dataSrc

```TypeScript
dataSrc?: media.AVDataSrcDescriptor
```

DataSource descriptor. The caller ensures the fileSize and callback are valid.

**类型：** media.AVDataSrcDescriptor

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.AVSession.Core

