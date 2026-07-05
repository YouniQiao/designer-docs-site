# AdvertisingParams

Describes the advertising parameters.

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

Indicates the duration for advertising continuously. The duration, in 10ms unit. Valid range is from 1 (10ms) to 65535 (655,350 ms). If this parameter is not specified or is set to 0, advertisement is continuously sent.

**类型：** int

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## advertisingSettings

```TypeScript
advertisingSettings: AdvertiseSetting
```

Indicates the advertising settings.

**类型：** AdvertiseSetting

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## advertisingData

```TypeScript
advertisingData: AdvertiseData
```

Indicates the advertising data.

**类型：** AdvertiseData

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## advertisingResponse

```TypeScript
advertisingResponse?: AdvertiseData
```

Indicates the advertising response.

**类型：** AdvertiseData

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

