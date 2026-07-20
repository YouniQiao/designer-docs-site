# AVControlCommand

The definition of command to be sent to the session

**Since:** 10

<!--Device-avSession-interface AVControlCommand--><!--Device-avSession-interface AVControlCommand-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## command

```TypeScript
command: AVControlCommandType
```

The command value {@link AVControlCommandType}

**Type:** AVControlCommandType

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVControlCommand-command: AVControlCommandType--><!--Device-AVControlCommand-command: AVControlCommandType-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

## commandInfo

```TypeScript
commandInfo?: CommandInfo
```

The command value {@link CommandInfo}

**Type:** CommandInfo

**Since:** 22

<!--Device-AVControlCommand-commandInfo?: CommandInfo--><!--Device-AVControlCommand-commandInfo?: CommandInfo-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

## parameter

```TypeScript
parameter?: LoopMode | string | number
```

parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand}seek command requires a number parameter setSpeed command requires a number parameter setLoopMode command requires a {@link LoopMode} parameter.toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter other commands need no parameter

**Type:** LoopMode | string | number

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVControlCommand-parameter?: LoopMode | string | double--><!--Device-AVControlCommand-parameter?: LoopMode | string | double-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

