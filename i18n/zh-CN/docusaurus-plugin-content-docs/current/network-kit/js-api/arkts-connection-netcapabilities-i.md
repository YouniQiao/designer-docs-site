# NetCapabilities

Defines the network capability set.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## linkUpBandwidthKbps

```TypeScript
linkUpBandwidthKbps?: int
```

Uplink (device-to-network) bandwidth.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## bearerTypes

```TypeScript
bearerTypes: Array<NetBearType>
```

Network type.

**类型：** Array<NetBearType>

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## linkDownBandwidthKbps

```TypeScript
linkDownBandwidthKbps?: int
```

Downstream (network-to-device) bandwidth.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Communication.NetManager.Core

## networkCap

```TypeScript
networkCap?: Array<NetCap>
```

Network-specific capabilities.

**类型：** Array<NetCap>

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

