# CellInformation

Obtains current cell information.

**Since:** 8

<!--Device-radio-export interface CellInformation--><!--Device-radio-export interface CellInformation-End-->

**System capability:** SystemCapability.Telephony.CoreService

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## data

```TypeScript
data: CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation
      | WcdmaCellInformation
```

Obtains signal strength under different network formats.

**Type:** CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation | WcdmaCellInformation

**Since:** 8

<!--Device-CellInformation-data: CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation
      | WcdmaCellInformation--><!--Device-CellInformation-data: CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation
      | WcdmaCellInformation-End-->

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## isCamped

```TypeScript
isCamped: boolean
```

Obtains the camp-on status of the serving cell.

Returns {@code true} if the user equipment (UE) is camped on the cell; returns {@code false} otherwise.

**Type:** boolean

**Since:** 8

<!--Device-CellInformation-isCamped: boolean--><!--Device-CellInformation-isCamped: boolean-End-->

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## timeStamp

```TypeScript
timeStamp: number
```

Obtains the timestamp when the cell information is obtained.

Returns a timestamp since boot, in nanoseconds.

**Type:** number

**Since:** 8

<!--Device-CellInformation-timeStamp: int--><!--Device-CellInformation-timeStamp: int-End-->

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

