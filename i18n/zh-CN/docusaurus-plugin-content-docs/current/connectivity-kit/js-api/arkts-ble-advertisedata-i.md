# AdvertiseData

Describes the advertising data.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## serviceData

```TypeScript
serviceData: Array<ServiceData>
```

The specified service data list to this advertisement

**类型：** Array<ServiceData>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuids

```TypeScript
serviceUuids: Array<string>
```

The specified service UUID list to this advertisement

**类型：** Array<string>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## includeTxPower

```TypeScript
includeTxPower?: boolean
```

Indicates whether the tx power will be included in the advertisement packet.

**类型：** boolean

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## advertiseName

```TypeScript
advertiseName?: string
```

Indicates the local name data type in the advertisement packet. If both the property and {@link AdvertiseData#includeDeviceName} property are used together, the {@link AdvertiseData#advertiseName} property will ultimately take effect.

**类型：** string

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## includeDeviceName

```TypeScript
includeDeviceName?: boolean
```

Indicates whether the device name will be included in the advertisement packet.

**类型：** boolean

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## manufactureData

```TypeScript
manufactureData: Array<ManufactureData>
```

The specified manufacturer data list to this advertisement

**类型：** Array<ManufactureData>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

