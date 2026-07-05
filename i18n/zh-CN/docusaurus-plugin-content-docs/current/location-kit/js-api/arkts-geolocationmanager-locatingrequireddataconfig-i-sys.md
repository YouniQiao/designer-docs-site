# LocatingRequiredDataConfig

Describes the request parameters for obtaining the data required for locating.

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## scanInterval

```TypeScript
scanInterval?: int
```

Indicates the interval between scans. The unit is millisecond. This parameter needs to be set only when scanning information is continuously monitored.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## slotId

```TypeScript
slotId?: int
```

Indicates SIM card slot number.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## plmnId

```TypeScript
plmnId?: int[]
```

Indicates PLMN number of the SIM card.

**类型：** int[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## arfcn

```TypeScript
arfcn?: int[]
```

Indicates absolute radio frequency channel number (ARFCN). Querying Cell Information by Specified ARFCN.

**类型：** int[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: LocatingRequiredDataType
```

Indicates the type of locating required data.

**类型：** LocatingRequiredDataType

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## needStartScan

```TypeScript
needStartScan: boolean
```

Indicates whether to start scanning.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## scanTimeout

```TypeScript
scanTimeout?: int
```

Indicates the timeout period of a single scan. The unit is millisecond. The default value is 10000. This parameter needs to be set only when getLocatingRequiredData is used.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

