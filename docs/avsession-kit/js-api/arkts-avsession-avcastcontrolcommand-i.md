# AVCastControlCommand

The definition of cast command to be sent to the session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## Modules to Import

```TypeScript
import { avSession } from '@ohos.multimedia.avsession';
```

## command

```TypeScript
command: AVCastControlCommandType
```

The command value {@link AVCastControlCommandType}

**Type:** AVCastControlCommandType

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## parameter

```TypeScript
parameter?: media.PlaybackSpeed | number | string | LoopMode
```

Parameter carried in the command. The seek command must carry the number parameter. The setVolume command must carry the number parameter. The toggleFavorite command must carry the {@link AVMediaDescription.assetId} parameter. The setSpeed command must carry the {@link #media.PlaybackSpeed} parameter. The setLoopMode command must carry the {@link LoopMode} parameter. Other commands do not need to carry parameters.

**Type:** media.PlaybackSpeed | number | string | LoopMode

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

