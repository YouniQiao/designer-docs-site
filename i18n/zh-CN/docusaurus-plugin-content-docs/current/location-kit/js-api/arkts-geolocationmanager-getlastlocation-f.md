# getLastLocation

## getLastLocation

```TypeScript
function getLastLocation(): Location
```

Obtain last known location.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Location | The last known location information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getLastLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let location = geoLocationManager.getLastLocation();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

