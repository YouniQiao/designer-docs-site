# AdvertisingEnableParams

Parameter for dynamically enable advertising.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## duration

```TypeScript
duration?: int
```

Indicates the duration for advertising continuously. The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms). If this parameter is not specified or is set to 0, advertise is continuously sent.

**类型：** int

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## advertisingId

```TypeScript
advertisingId: int
```

Indicates the ID of current advertising.

**类型：** int

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

