# ScanResult

Describes the contents of the scan results.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## rssi

```TypeScript
rssi: int
```

RSSI of the remote device

**Type:** int

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## connectable

```TypeScript
connectable: boolean
```

Connectable of the remote device

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## address

```TypeScript
address?: BluetoothAddress
```

The address object of a BLE peripheral device, including the address type.

**Type:** BluetoothAddress

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## data

```TypeScript
data: ArrayBuffer
```

The raw data of broadcast packet

**Type:** ArrayBuffer

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## advertisingDataMap

```TypeScript
advertisingDataMap?: Map<int, Uint8Array>
```

Map of advertising data fields.

**Type:** Map<int, Uint8Array>

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## manufacturerDataMap

```TypeScript
manufacturerDataMap?: Map<int, Uint8Array>
```

Map of manufacturer data.

**Type:** Map<int, Uint8Array>

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## txPowerLevel

```TypeScript
txPowerLevel?: int
```

The tx power level of the packet in dBm.

**Type:** int

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## advertiseFlags

```TypeScript
advertiseFlags?: int
```

This field is used to identify the discovery mode and supported capabilities of the peer device.

**Type:** int

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuids

```TypeScript
serviceUuids?: string[]
```

The list of service uuid.

**Type:** string[]

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceName

```TypeScript
deviceName: string
```

The local name of the BLE device

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Address of the scanned device

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceDataMap

```TypeScript
serviceDataMap?: Map<string, Uint8Array>
```

Map of service data.

**Type:** Map<string, Uint8Array>

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

