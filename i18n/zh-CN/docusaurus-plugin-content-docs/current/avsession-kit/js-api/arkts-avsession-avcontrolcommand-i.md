# AVControlCommand

The definition of command to be sent to the session

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## parameter

```TypeScript
parameter?: LoopMode | string | double
```

parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand} seek command requires a number parameter setSpeed command requires a number parameter setLoopMode command requires a {@link LoopMode} parameter. toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter other commands need no parameter

**类型：** LoopMode | string | double

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## commandInfo

```TypeScript
commandInfo?: CommandInfo
```

The command value {@link CommandInfo}

**类型：** CommandInfo

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## command

```TypeScript
command: AVControlCommandType
```

The command value {@link AVControlCommandType}

**类型：** AVControlCommandType

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

