# AVControlCommand

The definition of command to be sent to the session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## parameter

```TypeScript
parameter?: LoopMode | string | double
```

parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand} seek command requires a number parameter setSpeed command requires a number parameter setLoopMode command requires a {@link LoopMode} parameter. toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter other commands need no parameter

**Type:** LoopMode | string | double

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## commandInfo

```TypeScript
commandInfo?: CommandInfo
```

The command value {@link CommandInfo}

**Type:** CommandInfo

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

## command

```TypeScript
command: AVControlCommandType
```

The command value {@link AVControlCommandType}

**Type:** AVControlCommandType

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

