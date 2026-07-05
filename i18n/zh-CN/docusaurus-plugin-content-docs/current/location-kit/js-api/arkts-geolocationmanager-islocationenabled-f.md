# isLocationEnabled

## isLocationEnabled

```TypeScript
function isLocationEnabled(): boolean
```

Obtain current location switch status.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the location switch on, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.isLocationEnabled} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let locationEnabled = geoLocationManager.isLocationEnabled();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

