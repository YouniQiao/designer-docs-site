# GattService

Describes the Gatt service.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.GattService

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## characteristics

```TypeScript
characteristics: Array<BLECharacteristic>
```

The {@link BLECharacteristic} list belongs to this GattService instance

**类型：** Array<BLECharacteristic>

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.GattService#characteristics

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## isPrimary

```TypeScript
isPrimary: boolean
```

Indicates whether the GattService instance is primary or secondary.

**类型：** boolean

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.GattService#isPrimary

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## includeServices

```TypeScript
includeServices?: Array<GattService>
```

The list of GATT services contained in the service

**类型：** Array<GattService>

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.GattService#includeServices

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of a GattService instance

**类型：** string

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.GattService#serviceUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

