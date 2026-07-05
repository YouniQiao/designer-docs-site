# CellInformation

Obtains current cell information.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CoreService

## 导入模块

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## timeStamp

```TypeScript
timeStamp: int
```

Obtains the timestamp when the cell information is obtained. Returns a timestamp since boot, in nanoseconds.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

## data

```TypeScript
data: CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation
      | WcdmaCellInformation
```

Obtains signal strength under different network formats.

**类型：** CdmaCellInformation | GsmCellInformation | LteCellInformation | NrCellInformation | TdscdmaCellInformation | WcdmaCellInformation

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

## signalInformation

```TypeScript
signalInformation: SignalInformation
```

An abstract method of the parent class whose implementation depends on the child classes. Returned child class objects vary according to the network type. Returns child class objects specific to the network type.

**类型：** SignalInformation

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CoreService

## isCamped

```TypeScript
isCamped: boolean
```

Obtains the camp-on status of the serving cell. Returns {@code true} if the user equipment (UE) is camped on the cell; returns {@code false} otherwise.

**类型：** boolean

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

## networkType

```TypeScript
networkType: NetworkType
```

Obtains the network type of the serving cell. An application can call this method to determine the network type that the child class uses.

**类型：** NetworkType

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CoreService

