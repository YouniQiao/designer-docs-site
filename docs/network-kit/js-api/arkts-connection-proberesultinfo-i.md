# ProbeResultInfo

Defines the probe result information.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## rtt

```TypeScript
rtt: int[]
```

RTT in microseconds, min/avg/max/std.

**Type:** int[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## lossRate

```TypeScript
lossRate: int
```

Packet loss rate. The value 100 indicates 100% packet loss, and 50 indicates 50% packet loss.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

