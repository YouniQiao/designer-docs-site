# BluetoothSearchRequest

Indicates request parameters for Bluetooth search function.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Location.Location.Core

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## rssiThreshold

```TypeScript
rssiThreshold?: int
```

Indicates the Bluetooth RSSI threshold, only search Bluetooth BSSID with RSSI greater than this threshold. The value range is all integers.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## deviceIdArray

```TypeScript
deviceIdArray: Array<string>
```

Indicates the list of Bluetooth device ID that need to be search.

**类型：** Array<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

