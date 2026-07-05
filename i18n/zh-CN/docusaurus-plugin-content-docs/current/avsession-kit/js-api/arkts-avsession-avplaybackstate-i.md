# AVPlaybackState

Used to indicate the playback state of the current media. If the playback state of the media changes, it needs to be updated synchronously

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## bufferedTime

```TypeScript
bufferedTime?: long
```

The current buffered time, the maximum playable position, described by milliseconds.

**类型：** long

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## extras

```TypeScript
extras?: {[key: string]: Object}
```

Current custom media packets

**类型：** {[key: string]: Object}

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

```TypeScript
extras?: Record<string, Object>
```

Current custom media packets

**类型：** Record<string, Object>

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## activeItemId

```TypeScript
activeItemId?: int
```

Current active item id

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## loopMode

```TypeScript
loopMode?: LoopMode
```

Current playback loop mode. See {@link LoopMode}

**类型：** LoopMode

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## maxVolume

```TypeScript
maxVolume?: int
```

maximum volume

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## speed

```TypeScript
speed?: double
```

Current playback speed

**类型：** double

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## videoHeight

```TypeScript
videoHeight?: int
```

The video height of this media asset.

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## videoWidth

```TypeScript
videoWidth?: int
```

The video width of this media asset.

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## duration

```TypeScript
duration?: int
```

The duration of this media asset, described by milliseconds.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## volume

```TypeScript
volume?: int
```

Current player volume

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## position

```TypeScript
position?: PlaybackPosition
```

Current playback position of this media. See {@link PlaybackPosition}

**类型：** PlaybackPosition

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## state

```TypeScript
state?: PlaybackState
```

Current playback state. See {@link PlaybackState}

**类型：** PlaybackState

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## muted

```TypeScript
muted?: boolean
```

Current muted status

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## isFavorite

```TypeScript
isFavorite?: boolean
```

Current Favorite Status

**类型：** boolean

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

