# NotifyCharacteristic

Describes the value of the indication or notification sent by the Gatt server.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## confirm

```TypeScript
confirm: boolean
```

Specifies whether to request confirmation from the BLE peripheral device (indication) or send a notification. Value {@code true} indicates the former and {@code false} indicates the latter.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.confirm

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a NotifyCharacteristic instance

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.characteristicUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicValue

```TypeScript
characteristicValue: ArrayBuffer
```

The value of a NotifyCharacteristic instance

**Type:** ArrayBuffer

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.characteristicValue

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link GattService} instance to which the characteristic belongs

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.NotifyCharacteristic.serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

