# CurrentLocationRequest

Configuring parameters in current location requests.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## scenario

```TypeScript
scenario?: LocationRequestScenario
```

User scenario of the location request.

**类型：** LocationRequestScenario

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## timeoutMs

```TypeScript
timeoutMs?: int
```

Timeout interval of a single location request.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## priority

```TypeScript
priority?: LocationRequestPriority
```

Priority of the location request.

**类型：** LocationRequestPriority

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## maxAccuracy

```TypeScript
maxAccuracy?: double
```

Accuracy requirements for reporting locations.

**类型：** double

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

