# ScanOptions

Describes the parameters for scan.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## scanEnhanceMode

```TypeScript
scanEnhanceMode?: ScanEnhanceMode
```

Configuration of scan enhance mode.

**Type:** ScanEnhanceMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## dutyMode

```TypeScript
dutyMode?: ScanDuty
```

Bluetooth LE scan mode

**Type:** ScanDuty

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## phyType

```TypeScript
phyType?: PhyType
```

Physical Layer used during scan.

**Type:** PhyType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## interval

```TypeScript
interval?: int
```

Time of delay for reporting the scan result

**Type:** int

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## isExtended

```TypeScript
isExtended?: boolean
```

Indicates whether the scan is extended, default is {@code false}

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## reportMode

```TypeScript
reportMode?: ScanReportMode
```

Report mode used during scan.

**Type:** ScanReportMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## matchMode

```TypeScript
matchMode?: MatchMode
```

Match mode for Bluetooth LE scan filters hardware match

**Type:** MatchMode

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

