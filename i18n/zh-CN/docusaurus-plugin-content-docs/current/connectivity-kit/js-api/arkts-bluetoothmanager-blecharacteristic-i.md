# BLECharacteristic

Describes the Gatt characteristic.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.BLECharacteristic

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## descriptors

```TypeScript
descriptors: Array<BLEDescriptor>
```

The list of {@link BLEDescriptor} contained in the characteristic

**类型：** Array<BLEDescriptor>

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.BLECharacteristic#descriptors

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a BLECharacteristic instance

**类型：** string

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.BLECharacteristic#characteristicUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## characteristicValue

```TypeScript
characteristicValue: ArrayBuffer
```

The value of a BLECharacteristic instance

**类型：** ArrayBuffer

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.BLECharacteristic#characteristicValue

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link GattService} instance to which the characteristic belongs

**类型：** string

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.BLECharacteristic#serviceUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

