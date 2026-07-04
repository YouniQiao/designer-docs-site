# TCPExtraOptions

Defines other properties of the TCPSocket connection.

**Inheritance/Implementation:** TCPExtraOptions extends [ExtraOptionsBase](arkts-network-extraoptionsbase-i.md#extraoptionsbase)

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## OOBInline

```TypeScript
OOBInline?: boolean
```

Whether to enable OOBInline. The default value is false.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## TCPNoDelay

```TypeScript
TCPNoDelay?: boolean
```

Whether to enable no-delay on the TCPSocket connection. The default value is false.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## keepAlive

```TypeScript
keepAlive?: boolean
```

Whether to keep the connection alive. The default value is false.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## socketLinger

```TypeScript
socketLinger?: { on: boolean, linger: number }
```

Socket linger.

**Type:** { on: boolean, linger: number }

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## tcpFastOpen

```TypeScript
tcpFastOpen?: boolean
```

Whether to enable TCP Fast Open (TFO) on the TCPSocket connection. The default value is false.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

