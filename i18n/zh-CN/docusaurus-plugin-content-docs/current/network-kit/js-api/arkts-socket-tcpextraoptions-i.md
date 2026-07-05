# TCPExtraOptions

Defines other properties of the TCPSocket connection.

**继承实现关系：** TCPExtraOptions继承自：ExtraOptionsBase。

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## OOBInline

```TypeScript
OOBInline?: boolean
```

Whether to enable OOBInline. The default value is false.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## keepAlive

```TypeScript
keepAlive?: boolean
```

Whether to keep the connection alive. The default value is false.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## tcpFastOpen

```TypeScript
tcpFastOpen?: boolean
```

Whether to enable TCP Fast Open (TFO) on the TCPSocket connection. The default value is false.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## socketLinger

```TypeScript
socketLinger?: { on: boolean, linger: number }
```

Socket linger.

**类型：** { on: boolean, linger: number }

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## TCPNoDelay

```TypeScript
TCPNoDelay?: boolean
```

Whether to enable no-delay on the TCPSocket connection. The default value is false.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

