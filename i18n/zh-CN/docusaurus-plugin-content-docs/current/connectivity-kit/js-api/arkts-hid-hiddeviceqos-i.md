# HidDeviceQos

Represents the Quality of Service (QoS) settings for a bluetooth hid device application.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { hid } from '@kit.ConnectivityKit';
```

## serviceType

```TypeScript
serviceType?: ServiceType
```

L2CAP service type, default = SERVICE_BEST_EFFORT.

**类型：** ServiceType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## delayVariation

```TypeScript
delayVariation?: int
```

L2CAP delay variation, default = -1.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## tokenRate

```TypeScript
tokenRate?: int
```

L2CAP tokenRate, means transmission rate, default = 0.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## latency

```TypeScript
latency?: int
```

L2CAP latency, default = -1.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## tokenBucketSize

```TypeScript
tokenBucketSize?: int
```

L2CAP token bucket size, default = 0.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## peakBandwidth

```TypeScript
peakBandwidth?: int
```

L2CAP peak bandwidth, default = 0.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

