# ConnectionProperties

Defines the network connection properties.

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## dnses

```TypeScript
dnses: Array<NetAddress>
```

Network address, refer to [NetAddress].

**Type:** Array<NetAddress>

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## domains

```TypeScript
domains: string
```

Domain. The default value is "".

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## interfaceName

```TypeScript
interfaceName: string
```

Network card name.

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## isIPv4LinkValid

```TypeScript
isIPv4LinkValid?: boolean
```

Whether the IPv4 address of the interface is valid.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## isIPv6LinkValid

```TypeScript
isIPv6LinkValid?: boolean
```

Whether the IPv6 address of the interface is valid.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## linkAddresses

```TypeScript
linkAddresses: Array<LinkAddress>
```

Link information.

**Type:** Array<LinkAddress>

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## mtu

```TypeScript
mtu: number
```

Maximum transmission unit.

**Type:** number

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## routes

```TypeScript
routes: Array<RouteInfo>
```

Routing information.

**Type:** Array<RouteInfo>

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

