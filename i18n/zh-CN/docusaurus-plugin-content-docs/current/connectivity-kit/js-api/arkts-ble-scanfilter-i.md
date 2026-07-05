# ScanFilter

Describes the criteria for filtering scanning results can be set.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## rssiThreshold

```TypeScript
rssiThreshold?: int
```

RSSI threshold for filtering advertising that pass through.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## irk

```TypeScript
irk?: Uint8Array
```

Identity Resolving Key of BLE peripheral device. {@link ScanFilter#irk} needs to be used with {@link ScanFilter#address}.

**类型：** Uint8Array

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## address

```TypeScript
address?: BluetoothAddress
```

The address object of a BLE peripheral device, including the address type.

**类型：** BluetoothAddress

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceSolicitationUuid

```TypeScript
serviceSolicitationUuid?: string
```

Service solicitation UUID.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId?: string
```

The address of a BLE peripheral device

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceDataMask

```TypeScript
serviceDataMask?: ArrayBuffer
```

Service data mask.

**类型：** ArrayBuffer

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuidMask

```TypeScript
serviceUuidMask?: string
```

Service UUID mask.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceData

```TypeScript
serviceData?: ArrayBuffer
```

Service data.

**类型：** ArrayBuffer

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## name

```TypeScript
name?: string
```

The name of a BLE peripheral device

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## manufactureDataMask

```TypeScript
manufactureDataMask?: ArrayBuffer
```

Manufacture data mask.

**类型：** ArrayBuffer

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## manufactureId

```TypeScript
manufactureId?: int
```

Manufacture id.

**类型：** int

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## manufactureData

```TypeScript
manufactureData?: ArrayBuffer
```

Manufacture data.

**类型：** ArrayBuffer

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceSolicitationUuidMask

```TypeScript
serviceSolicitationUuidMask?: string
```

Service solicitation UUID mask.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid?: string
```

The service UUID of a BLE peripheral device

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

