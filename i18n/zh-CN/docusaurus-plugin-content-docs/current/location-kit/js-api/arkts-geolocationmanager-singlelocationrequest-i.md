# SingleLocationRequest

Configuring parameters in single location requests.

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

## locatingTimeoutMs

```TypeScript
locatingTimeoutMs: int
```

Timeout of a single location request, in milliseconds.

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

## locatingPriority

```TypeScript
locatingPriority: LocatingPriority
```

Priority of the location request.

**类型：** LocatingPriority

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

