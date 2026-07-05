# isCachedGnssServiceSupported

## isCachedGnssServiceSupported

```TypeScript
function isCachedGnssServiceSupported(): boolean
```

Check whether the cached GNSS service is supported.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if cached service is available, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
try {
    let cachedGnssServiceSupported = geoLocationManager.isCachedGnssServiceSupported();
} catch (err) {
    console.error("errCode:" + err.code + ", message:"  + err.message);
}

```

