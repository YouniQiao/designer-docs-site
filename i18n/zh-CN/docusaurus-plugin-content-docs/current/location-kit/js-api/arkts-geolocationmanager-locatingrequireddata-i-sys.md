# LocatingRequiredData

Describes the structure of the data required for locating.

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## campedCellInfo

```TypeScript
campedCellInfo?: CellInfo
```

Indicates camped cell information.

**类型：** CellInfo

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## bluetoothData

```TypeScript
bluetoothData?: BluetoothScanInfo
```

Bluetooth scan info.

**类型：** BluetoothScanInfo

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## slotId

```TypeScript
slotId?: int
```

Indicates the card slot index number.

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## neighboringCellInfo

```TypeScript
neighboringCellInfo?: CellInfo[]
```

Indicates neighboring cell information.

**类型：** CellInfo[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

## wifiData

```TypeScript
wifiData?: WifiScanInfo
```

WiFi scan info.

**类型：** WifiScanInfo

**起始版本：** 10

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

