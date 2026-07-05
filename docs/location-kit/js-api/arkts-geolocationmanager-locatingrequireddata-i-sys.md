# LocatingRequiredData

Describes the structure of the data required for locating.

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## campedCellInfo

```TypeScript
campedCellInfo?: CellInfo
```

Indicates camped cell information.

**Type:** CellInfo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## bluetoothData

```TypeScript
bluetoothData?: BluetoothScanInfo
```

Bluetooth scan info.

**Type:** BluetoothScanInfo

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## slotId

```TypeScript
slotId?: int
```

Indicates the card slot index number.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## neighboringCellInfo

```TypeScript
neighboringCellInfo?: CellInfo[]
```

Indicates neighboring cell information.

**Type:** CellInfo[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## wifiData

```TypeScript
wifiData?: WifiScanInfo
```

WiFi scan info.

**Type:** WifiScanInfo

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

