# TraceRouteOptions

Network traceroute option definition.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## maxJumpNumber

```TypeScript
maxJumpNumber?: int
```

Maximum number of jumps, max is 30. Default is 30.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## packetsType

```TypeScript
packetsType?: PacketsType
```

Packets type. Default is NETCONN_PACKETS_ICMP.

**Type:** PacketsType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

