# NetCapabilities

Defines the network capability set.

**Since:** 11

<!--Device-connection-export interface NetCapabilities--><!--Device-connection-export interface NetCapabilities-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## bearerTypes

```TypeScript
bearerTypes: Array<NetBearType>
```

Network type.

**Type:** Array<NetBearType>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-NetCapabilities-bearerTypes: Array<NetBearType>--><!--Device-NetCapabilities-bearerTypes: Array<NetBearType>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## linkDownBandwidthKbps

```TypeScript
linkDownBandwidthKbps?: number
```

Downstream (network-to-device) bandwidth.

**Type:** number

**Since:** 8

<!--Device-NetCapabilities-linkDownBandwidthKbps?: int--><!--Device-NetCapabilities-linkDownBandwidthKbps?: int-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## linkUpBandwidthKbps

```TypeScript
linkUpBandwidthKbps?: number
```

Uplink (device-to-network) bandwidth.

**Type:** number

**Since:** 8

<!--Device-NetCapabilities-linkUpBandwidthKbps?: int--><!--Device-NetCapabilities-linkUpBandwidthKbps?: int-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## networkCap

```TypeScript
networkCap?: Array<NetCap>
```

Network-specific capabilities.

**Type:** Array<NetCap>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-NetCapabilities-networkCap?: Array<NetCap>--><!--Device-NetCapabilities-networkCap?: Array<NetCap>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

