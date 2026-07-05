# AVCastControlCommand

The definition of cast command to be sent to the session

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## parameter

```TypeScript
parameter?: media.PlaybackSpeed | double | string | LoopMode
```

Parameter carried in the command. The seek command must carry the number parameter. The setVolume command must carry the number parameter. The toggleFavorite command must carry the {@link AVMediaDescription.assetId} parameter. The setSpeed command must carry the {@link #media.PlaybackSpeed} parameter. The setLoopMode command must carry the {@link LoopMode} parameter. Other commands do not need to carry parameters.

**类型：** media.PlaybackSpeed | double | string | LoopMode

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## command

```TypeScript
command: AVCastControlCommandType
```

The command value {@link AVCastControlCommandType}

**类型：** AVCastControlCommandType

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

