# NotifyCharacteristic

Describes the value of the indication or notification sent by the Gatt server.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## confirm

```TypeScript
confirm: boolean
```

Specifies whether to request confirmation from the BLE peripheral device (indication) or send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.confirm

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a NotifyCharacteristic instance

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.characteristicUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## characteristicValue

```TypeScript
characteristicValue: ArrayBuffer
```

The value of a NotifyCharacteristic instance

**类型：** ArrayBuffer

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.characteristicValue

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link GattService} instance to which the characteristic belongs

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.serviceUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

