# CellInformation

Obtains current cell information.

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## timeStamp

```TypeScript
timeStamp: int
```

Obtains the timestamp when the cell information is obtained. Returns a timestamp since boot, in nanoseconds.

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## data

```TypeScript
data: CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation
      | WcdmaCellInformation
```

Obtains signal strength under different network formats.

**Type:** CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation | WcdmaCellInformation

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## signalInformation

```TypeScript
signalInformation: SignalInformation
```

An abstract method of the parent class whose implementation depends on the child classes. Returned child class objects vary according to the network type. Returns child class objects specific to the network type.

**Type:** SignalInformation

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

## isCamped

```TypeScript
isCamped: boolean
```

Obtains the camp-on status of the serving cell. Returns {@code true} if the user equipment (UE) is camped on the cell; returns {@code false} otherwise.

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## networkType

```TypeScript
networkType: NetworkType
```

Obtains the network type of the serving cell. An application can call this method to determine the network type that the child class uses.

**Type:** NetworkType

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

