# ProbeResultInfo

Defines the probe result information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## rtt

```TypeScript
rtt: int[]
```

RTT in microseconds, min/avg/max/std.

**类型：** int[]

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## lossRate

```TypeScript
lossRate: int
```

Packet loss rate. The value 100 indicates 100% packet loss, and 50 indicates 50% packet loss.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

