# GattService

Describes the Gatt service.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** GattService

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@ohos.bluetoothManager';
```

## characteristics

```TypeScript
characteristics: Array<BLECharacteristic>
```

The {@link BLECharacteristic} list belongs to this GattService instance

**Type:** Array<BLECharacteristic>

**Since:** 9

**Deprecated since:** 10

**Substitutes:** characteristics

**System capability:** SystemCapability.Communication.Bluetooth.Core

## includeServices

```TypeScript
includeServices?: Array<GattService>
```

The list of GATT services contained in the service

**Type:** Array<GattService>

**Since:** 9

**Deprecated since:** 10

**Substitutes:** includeServices

**System capability:** SystemCapability.Communication.Bluetooth.Core

## isPrimary

```TypeScript
isPrimary: boolean
```

Indicates whether the GattService instance is primary or secondary.

**Type:** boolean

**Since:** 9

**Deprecated since:** 10

**Substitutes:** isPrimary

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of a GattService instance

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitutes:** serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

