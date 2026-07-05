# isGeocoderAvailable

## isGeocoderAvailable

```TypeScript
function isGeocoderAvailable(): boolean
```

Obtain geocoding service status.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geocoder

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if geocoding service is available,  returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.isGeocoderAvailable} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isAvailable = geoLocationManager.isGeocoderAvailable();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

