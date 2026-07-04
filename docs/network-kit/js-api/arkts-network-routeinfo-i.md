# RouteInfo

Defines network route information.

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## destination

```TypeScript
destination: LinkAddress
```

Destination Address

**Type:** LinkAddress

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## gateway

```TypeScript
gateway: NetAddress
```

Gateway address.

**Type:** NetAddress

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## hasGateway

```TypeScript
hasGateway: boolean
```

Whether a gateway is present.

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## interface

```TypeScript
interface: string
```

Network card name.

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## isDefaultRoute

```TypeScript
isDefaultRoute: boolean
```

Whether the route is the default route.

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.Communication.NetManager.Core

## isExcludedRoute

```TypeScript
isExcludedRoute?: boolean
```

Whether the route is the excluded route.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Communication.NetManager.Core

