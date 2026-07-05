# ContinuousLocationRequest

Configuring parameters in continuous location requests.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## needPoi

```TypeScript
needPoi?: boolean
```

Indicates whether to obtain POI information near the current location.

**类型：** boolean

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## locationScenario

```TypeScript
locationScenario: UserActivityScenario | PowerConsumptionScenario
```

Location scenario. You can select a user activity scenario or power consumption scenario.

**类型：** UserActivityScenario | PowerConsumptionScenario

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## interval

```TypeScript
interval: int
```

Location report interval, in seconds.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## sportsType

```TypeScript
sportsType?: SportsType
```

Indicates the type of sports. This parameter is valid only when locationScenario is set to UserActivityScenario.SPORT.

**类型：** SportsType

**起始版本：** 18

**原子化服务API：** 从API version 18开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

