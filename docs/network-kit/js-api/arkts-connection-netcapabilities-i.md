# NetCapabilities

Defines the network capability set.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## linkUpBandwidthKbps

```TypeScript
linkUpBandwidthKbps?: int
```

Uplink (device-to-network) bandwidth.

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## bearerTypes

```TypeScript
bearerTypes: Array<NetBearType>
```

Network type.

**Type:** Array<NetBearType>

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

## linkDownBandwidthKbps

```TypeScript
linkDownBandwidthKbps?: int
```

Downstream (network-to-device) bandwidth.

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## networkCap

```TypeScript
networkCap?: Array<NetCap>
```

Network-specific capabilities.

**Type:** Array<NetCap>

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

