# TraceRouteOptions

Network traceroute option definition.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## maxJumpNumber

```TypeScript
maxJumpNumber?: int
```

Maximum number of jumps, max is 30. Default is 30.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## packetsType

```TypeScript
packetsType?: PacketsType
```

Packets type. Default is NETCONN_PACKETS_ICMP.

**类型：** PacketsType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

