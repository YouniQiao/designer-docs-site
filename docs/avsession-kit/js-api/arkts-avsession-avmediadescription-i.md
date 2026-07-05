# AVMediaDescription

The description of the media for an item in the playlist of the session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## lyricUri

```TypeScript
lyricUri?: string
```

The lyric uri of the media.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## artist

```TypeScript
artist?: string
```

The artist of this media.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## appName

```TypeScript
appName?: string
```

Application name.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## mediaUri

```TypeScript
mediaUri?: string
```

The uri of the media, used to locate the media in some special cases

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## extras

```TypeScript
extras?: {[key: string]: Object}
```

Any additional attributes that can be represented as key-value pairs

**Type:** {[key: string]: Object}

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

```TypeScript
extras?: Record<string, Object>
```

Any additional attributes that can be represented as key-value pairs

**Type:** Record<string, Object>

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

## description

```TypeScript
description?: string
```

The description of this media

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## drmScheme

```TypeScript
drmScheme?: string
```

The drm scheme supported by this resource which is represented by uuid.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Multimedia.AVSession.Core

## fdSrc

```TypeScript
fdSrc?: media.AVFileDescriptor
```

Media file descriptor.

**Type:** media.AVFileDescriptor

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## mediaType

```TypeScript
mediaType?: string
```

The type of this media, such as video, audio and so on.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## title

```TypeScript
title?: string
```

The title of this media, for display in media center.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## startPosition

```TypeScript
startPosition?: int
```

Media start position, described by milliseconds.

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## pcmSrc

```TypeScript
pcmSrc?: boolean
```

Source type that supports PCM casting. The application can send PCM data directly to the system through audio APIs, without using AVSession to set data.

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## lyricContent

```TypeScript
lyricContent?: string
```

The lyric content of the media, it should be in standard lyric format

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## creditsPosition

```TypeScript
creditsPosition?: int
```

Media credits position, described by milliseconds.

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## duration

```TypeScript
duration?: int
```

The duration of this media, described by milliseconds.

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## mediaSize

```TypeScript
mediaSize?: int
```

The size of this media.

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## mediaImage

```TypeScript
mediaImage?: image.PixelMap | string
```

The image of this media asset displayed in the media center. It can be a {@link PixelMap} or a URI formatted string,

**Type:** image.PixelMap | string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## displayTags

```TypeScript
displayTags?: int
```

The display tags supported by application to be displayed on media center

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## assetId

```TypeScript
assetId: string
```

Unique ID used to represent this media.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## subtitle

```TypeScript
subtitle?: string
```

The subtitle of the media, used for display

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## albumTitle

```TypeScript
albumTitle?: string
```

The album title of this media

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## launchClientData

```TypeScript
launchClientData?: string
```

Custom data sent by the application to the receiver during casting.

**Type:** string

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## albumCoverUri

```TypeScript
albumCoverUri?: string
```

The album cover uri of this media

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## dataSrc

```TypeScript
dataSrc?: media.AVDataSrcDescriptor
```

DataSource descriptor. The caller ensures the fileSize and callback are valid.

**Type:** media.AVDataSrcDescriptor

**Since:** 12

**System capability:** SystemCapability.Multimedia.AVSession.Core

