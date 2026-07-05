# GattService

Describes the Gatt service.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.GattService

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

**Substitute:** ohos.bluetoothManager/bluetoothManager.GattService.characteristics

**System capability:** SystemCapability.Communication.Bluetooth.Core

## isPrimary

```TypeScript
isPrimary: boolean
```

Indicates whether the GattService instance is primary or secondary.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.GattService.isPrimary

**System capability:** SystemCapability.Communication.Bluetooth.Core

## includeServices

```TypeScript
includeServices?: Array<GattService>
```

The list of GATT services contained in the service

**Type:** Array<GattService>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.GattService.includeServices

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of a GattService instance

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.GattService.serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

