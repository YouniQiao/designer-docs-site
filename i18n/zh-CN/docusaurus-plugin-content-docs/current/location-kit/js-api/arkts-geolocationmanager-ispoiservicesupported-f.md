# isPoiServiceSupported

## isPoiServiceSupported

```TypeScript
function isPoiServiceSupported(): boolean
```

Check whether the POI service is supported.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if POI service is available, returns {@code false} otherwise. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let poiServiceState = geoLocationManager.isPoiServiceSupported();
console.info("poiServiceState:" + poiServiceState);

```

