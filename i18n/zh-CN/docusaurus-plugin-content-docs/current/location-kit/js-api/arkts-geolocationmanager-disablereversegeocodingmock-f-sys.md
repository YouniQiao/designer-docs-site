# disableReverseGeocodingMock

## disableReverseGeocodingMock

```TypeScript
function disableReverseGeocodingMock(): void
```

Disable the reverse geocoding simulation function.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MOCK_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.disableReverseGeocodingMock} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.disableReverseGeocodingMock();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

