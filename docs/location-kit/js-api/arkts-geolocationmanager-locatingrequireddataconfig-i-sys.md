# LocatingRequiredDataConfig

Describes the request parameters for obtaining the data required for locating.

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## scanInterval

```TypeScript
scanInterval?: int
```

Indicates the interval between scans. The unit is millisecond. This parameter needs to be set only when scanning information is continuously monitored.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## slotId

```TypeScript
slotId?: int
```

Indicates SIM card slot number.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## plmnId

```TypeScript
plmnId?: int[]
```

Indicates PLMN number of the SIM card.

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## arfcn

```TypeScript
arfcn?: int[]
```

Indicates absolute radio frequency channel number (ARFCN). Querying Cell Information by Specified ARFCN.

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## type

```TypeScript
type: LocatingRequiredDataType
```

Indicates the type of locating required data.

**Type:** LocatingRequiredDataType

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## needStartScan

```TypeScript
needStartScan: boolean
```

Indicates whether to start scanning.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

## scanTimeout

```TypeScript
scanTimeout?: int
```

Indicates the timeout period of a single scan. The unit is millisecond. The default value is 10000. This parameter needs to be set only when getLocatingRequiredData is used.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

