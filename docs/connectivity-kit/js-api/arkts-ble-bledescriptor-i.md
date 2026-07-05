# BLEDescriptor

Describes the Gatt descriptor.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## descriptorHandle

```TypeScript
descriptorHandle?: int
```

The descriptor handle of the BLEDescriptor instance

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## permissions

```TypeScript
permissions?: GattPermissions
```

The permissions of a BLEDescriptor instance. The default value is Readable and Writable.

**Type:** GattPermissions

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## descriptorValue

```TypeScript
descriptorValue: ArrayBuffer
```

The value of the BLEDescriptor instance

**Type:** ArrayBuffer

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of the {@link BLECharacteristic} instance to which the descriptor belongs

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## descriptorUuid

```TypeScript
descriptorUuid: string
```

The UUID of the BLEDescriptor instance

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link GattService} instance to which the descriptor belongs

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

