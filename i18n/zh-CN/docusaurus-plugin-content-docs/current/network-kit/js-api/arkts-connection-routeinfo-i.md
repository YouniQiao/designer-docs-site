# RouteInfo

Defines network route information.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## isDefaultRoute

```TypeScript
isDefaultRoute: boolean
```

Whether the route is the default route.

**类型：** boolean

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## iface

```TypeScript
iface: string
```

Network card name.

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetManager.Core

## isExcludedRoute

```TypeScript
isExcludedRoute?: boolean
```

Whether the route is the excluded route.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Core

## hasGateway

```TypeScript
hasGateway: boolean
```

Whether a gateway is present.

**类型：** boolean

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## destination

```TypeScript
destination: LinkAddress
```

Destination Address

**类型：** LinkAddress

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## interface

```TypeScript
interface: string
```

Network card name.

**类型：** string

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## gateway

```TypeScript
gateway: NetAddress
```

Gateway address.

**类型：** NetAddress

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

