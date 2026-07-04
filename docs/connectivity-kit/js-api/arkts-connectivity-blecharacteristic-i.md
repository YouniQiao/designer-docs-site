# BLECharacteristic

Describes the Gatt characteristic.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** BLECharacteristic

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@ohos.bluetoothManager';
```

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a BLECharacteristic instance

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitutes:** characteristicUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicValue

```TypeScript
characteristicValue: ArrayBuffer
```

The value of a BLECharacteristic instance

**Type:** ArrayBuffer

**Since:** 9

**Deprecated since:** 10

**Substitutes:** characteristicValue

**System capability:** SystemCapability.Communication.Bluetooth.Core

## descriptors

```TypeScript
descriptors: Array<BLEDescriptor>
```

The list of {@link BLEDescriptor} contained in the characteristic

**Type:** Array<BLEDescriptor>

**Since:** 9

**Deprecated since:** 10

**Substitutes:** descriptors

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link GattService} instance to which the characteristic belongs

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitutes:** serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

