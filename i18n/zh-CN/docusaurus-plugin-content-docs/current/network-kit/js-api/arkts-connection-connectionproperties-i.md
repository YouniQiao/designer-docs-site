# ConnectionProperties

Defines the network connection properties.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## routes

```TypeScript
routes: Array<RouteInfo>
```

Routing information.

**类型：** Array<RouteInfo>

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## isIPv6LinkValid

```TypeScript
isIPv6LinkValid?: boolean
```

Whether the IPv6 address of the interface is valid.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## isIPv4LinkValid

```TypeScript
isIPv4LinkValid?: boolean
```

Whether the IPv4 address of the interface is valid.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## dnses

```TypeScript
dnses: Array<NetAddress>
```

Network address, refer to [NetAddress].

**类型：** Array<NetAddress>

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## linkAddresses

```TypeScript
linkAddresses: Array<LinkAddress>
```

Link information.

**类型：** Array<LinkAddress>

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## domains

```TypeScript
domains: string
```

Domain. The default value is "".

**类型：** string

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## interfaceName

```TypeScript
interfaceName: string
```

Network card name.

**类型：** string

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## mtu

```TypeScript
mtu: int
```

Maximum transmission unit.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

