# Location

Provides information about geographic locations.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## additionSize

```TypeScript
additionSize?: int
```

Indicates the amount of additional descriptive information.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## altitude

```TypeScript
altitude: double
```

Indicates location altitude, in meters.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## additions

```TypeScript
additions?: Array<string>
```

Indicates additional information.

**类型：** Array<string>

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## latitude

```TypeScript
latitude: double
```

Indicates latitude information. A positive value indicates north latitude, and a negative value indicates south latitude.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## altitudeAccuracy

```TypeScript
altitudeAccuracy?: double
```

Indicates vertical position accuracy in meters.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## accuracy

```TypeScript
accuracy: double
```

Indicates location accuracy, in meters.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## poi

```TypeScript
poi?: PoiInfo
```

Indicates the poi information.

**类型：** PoiInfo

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## speedAccuracy

```TypeScript
speedAccuracy?: double
```

Indicates speed accuracy in meter per seconds.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## additionsMap

```TypeScript
additionsMap?: Map<string, string>
```

Indicates additional information map.

**类型：** Map<string, string>

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## speed

```TypeScript
speed: double
```

Indicates speed, in m/s.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## uncertaintyOfTimeSinceBoot

```TypeScript
uncertaintyOfTimeSinceBoot?: long
```

Time uncertainty Of timeSinceBoot in nanosecond.

**类型：** long

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## timeStamp

```TypeScript
timeStamp: long
```

Indicates location timestamp in the UTC format.

**类型：** long

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## timeSinceBoot

```TypeScript
timeSinceBoot: long
```

Indicates location timestamp since boot.

**类型：** long

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## sourceType

```TypeScript
sourceType?: LocationSourceType
```

Indicates the source of the location.

**类型：** LocationSourceType

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## isFromMock

```TypeScript
isFromMock?: boolean
```

Indicates whether the location is mocked.

**类型：** boolean

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## directionAccuracy

```TypeScript
directionAccuracy?: double
```

Indicates direction accuracy in degrees.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## direction

```TypeScript
direction: double
```

Indicates direction information.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## longitude

```TypeScript
longitude: double
```

Indicates Longitude information. A positive value indicates east longitude , and a negative value indicates west longitude.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

