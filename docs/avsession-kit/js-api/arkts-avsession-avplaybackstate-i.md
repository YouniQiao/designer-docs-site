# AVPlaybackState

Used to indicate the playback state of the current media. If the playback state of the media changes, it needs to be updated synchronously

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## bufferedTime

```TypeScript
bufferedTime?: long
```

The current buffered time, the maximum playable position, described by milliseconds.

**Type:** long

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## extras

```TypeScript
extras?: {[key: string]: Object}
```

Current custom media packets

**Type:** {[key: string]: Object}

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

```TypeScript
extras?: Record<string, Object>
```

Current custom media packets

**Type:** Record<string, Object>

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## activeItemId

```TypeScript
activeItemId?: int
```

Current active item id

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## loopMode

```TypeScript
loopMode?: LoopMode
```

Current playback loop mode. See {@link LoopMode}

**Type:** LoopMode

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## maxVolume

```TypeScript
maxVolume?: int
```

maximum volume

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## speed

```TypeScript
speed?: double
```

Current playback speed

**Type:** double

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## videoHeight

```TypeScript
videoHeight?: int
```

The video height of this media asset.

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## videoWidth

```TypeScript
videoWidth?: int
```

The video width of this media asset.

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## duration

```TypeScript
duration?: int
```

The duration of this media asset, described by milliseconds.

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

## volume

```TypeScript
volume?: int
```

Current player volume

**Type:** int

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## position

```TypeScript
position?: PlaybackPosition
```

Current playback position of this media. See {@link PlaybackPosition}

**Type:** PlaybackPosition

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## state

```TypeScript
state?: PlaybackState
```

Current playback state. See {@link PlaybackState}

**Type:** PlaybackState

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## muted

```TypeScript
muted?: boolean
```

Current muted status

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## isFavorite

```TypeScript
isFavorite?: boolean
```

Current Favorite Status

**Type:** boolean

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

