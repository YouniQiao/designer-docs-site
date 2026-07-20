# GattService

Describes the Gatt service.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** GattService

<!--Device-bluetooth-interface GattService--><!--Device-bluetooth-interface GattService-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## characteristics

```TypeScript
characteristics: Array<BLECharacteristic>
```

The {@link BLECharacteristic} list belongs to this GattService instance

**Type:** Array<BLECharacteristic>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** characteristics

<!--Device-GattService-characteristics: Array<BLECharacteristic>--><!--Device-GattService-characteristics: Array<BLECharacteristic>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## includeServices

```TypeScript
includeServices?: Array<GattService>
```

The list of GATT services contained in the service

**Type:** Array<GattService>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** includeServices

<!--Device-GattService-includeServices?: Array<GattService>--><!--Device-GattService-includeServices?: Array<GattService>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## isPrimary

```TypeScript
isPrimary: boolean
```

Indicates whether the GattService instance is primary or secondary.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isPrimary

<!--Device-GattService-isPrimary: boolean--><!--Device-GattService-isPrimary: boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of a GattService instance

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** serviceUuid

<!--Device-GattService-serviceUuid: string--><!--Device-GattService-serviceUuid: string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

