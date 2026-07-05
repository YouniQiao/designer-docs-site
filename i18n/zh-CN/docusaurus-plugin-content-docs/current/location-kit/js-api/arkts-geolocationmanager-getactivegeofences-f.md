# getActiveGeoFences

## getActiveGeoFences

```TypeScript
function getActiveGeoFences(): Promise<Map<int, Geofence>>
```

Get all active fences.

**起始版本：** 23

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Geofence

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Map&lt;int, Geofence>> | The promise returned by the function.  The key of the map represents the fence ID.The value of the map represents  the detailed information of the fence. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not  have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getActiveGeoFences} due to limited device capabilities. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  if (geoLocationManager.isGnssFenceServiceSupported()) {
    geoLocationManager.getActiveGeoFences().then((res) => {
      if (res) {
        console.info("fence num:" + res.size);
        for (const item of res) {
          console.info("data=" + JSON.stringify(item));
        }
      }
    })
      .catch((error: BusinessError) => {
        console.error('promise, getActiveGeoFences: error=' + JSON.stringify(error));
      });
  }
} catch (error) {
  console.error("getActiveGeoFences: errCode" + error.code + ", errMessage" + error.message);
}

```

