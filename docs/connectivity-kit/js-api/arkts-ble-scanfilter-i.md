# ScanFilter

Describes the criteria for filtering scanning results can be set.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## rssiThreshold

```TypeScript
rssiThreshold?: int
```

RSSI threshold for filtering advertising that pass through.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## irk

```TypeScript
irk?: Uint8Array
```

Identity Resolving Key of BLE peripheral device. {@link ScanFilter#irk} needs to be used with {@link ScanFilter#address}.

**Type:** Uint8Array

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## address

```TypeScript
address?: BluetoothAddress
```

The address object of a BLE peripheral device, including the address type.

**Type:** BluetoothAddress

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceSolicitationUuid

```TypeScript
serviceSolicitationUuid?: string
```

Service solicitation UUID.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId?: string
```

The address of a BLE peripheral device

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceDataMask

```TypeScript
serviceDataMask?: ArrayBuffer
```

Service data mask.

**Type:** ArrayBuffer

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuidMask

```TypeScript
serviceUuidMask?: string
```

Service UUID mask.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceData

```TypeScript
serviceData?: ArrayBuffer
```

Service data.

**Type:** ArrayBuffer

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## name

```TypeScript
name?: string
```

The name of a BLE peripheral device

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## manufactureDataMask

```TypeScript
manufactureDataMask?: ArrayBuffer
```

Manufacture data mask.

**Type:** ArrayBuffer

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## manufactureId

```TypeScript
manufactureId?: int
```

Manufacture id.

**Type:** int

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## manufactureData

```TypeScript
manufactureData?: ArrayBuffer
```

Manufacture data.

**Type:** ArrayBuffer

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceSolicitationUuidMask

```TypeScript
serviceSolicitationUuidMask?: string
```

Service solicitation UUID mask.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid?: string
```

The service UUID of a BLE peripheral device

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

