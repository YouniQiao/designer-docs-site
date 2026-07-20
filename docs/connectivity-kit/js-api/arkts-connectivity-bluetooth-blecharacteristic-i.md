# BLECharacteristic

Describes the Gatt characteristic.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** BLECharacteristic

<!--Device-bluetooth-interface BLECharacteristic--><!--Device-bluetooth-interface BLECharacteristic-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a BLECharacteristic instance

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** characteristicUuid

<!--Device-BLECharacteristic-characteristicUuid: string--><!--Device-BLECharacteristic-characteristicUuid: string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicValue

```TypeScript
characteristicValue: ArrayBuffer
```

The value of a BLECharacteristic instance

**Type:** ArrayBuffer

**Since:** 7

**Deprecated since:** 9

**Substitutes:** characteristicValue

<!--Device-BLECharacteristic-characteristicValue: ArrayBuffer--><!--Device-BLECharacteristic-characteristicValue: ArrayBuffer-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## descriptors

```TypeScript
descriptors: Array<BLEDescriptor>
```

The list of {@link BLEDescriptor} contained in the characteristic

**Type:** Array<BLEDescriptor>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** descriptors

<!--Device-BLECharacteristic-descriptors: Array<BLEDescriptor>--><!--Device-BLECharacteristic-descriptors: Array<BLEDescriptor>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link GattService} instance to which the characteristic belongs

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** serviceUuid

<!--Device-BLECharacteristic-serviceUuid: string--><!--Device-BLECharacteristic-serviceUuid: string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

