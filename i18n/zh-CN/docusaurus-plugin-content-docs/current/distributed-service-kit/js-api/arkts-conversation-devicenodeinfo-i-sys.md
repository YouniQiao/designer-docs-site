# DeviceNodeInfo

Represents the device node information, including the networkId, device name, device type, nearby status and udid.

**起始版本：** 26.1.0

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { conversation } from '@kit.DistributedServiceKit';
```

## deviceTypeId

```TypeScript
deviceTypeId: int
```

Device type identifier. This numeric value represents the category of the device (e.g., phone, tablet, TV, wearable, etc.).

**类型：** int

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

## networkId

```TypeScript
networkId: string
```

NetworkId of the device. This ID uniquely identifies a device within the distributed network and is used for device addressing when sending messages.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

## udid

```TypeScript
udid: string
```

UDID of the device. This ID uniquely identifies a device and is used for device addressing when sending messages.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

## nearby

```TypeScript
nearby: boolean
```

Indicates whether the device is nearby.

**类型：** boolean

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

## deviceName

```TypeScript
deviceName: string
```

Name of the device.

**类型：** string

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

