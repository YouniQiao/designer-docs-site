# getPoiInfo

## getPoiInfo

```TypeScript
function getPoiInfo(): Promise<PoiInfo>
```

Obtaining POI Information.

**起始版本：** 20

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PoiInfo> | The promise returned by the function, for reporting POI info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.getPoiInfo} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  if (geoLocationManager.isPoiServiceSupported()) {
    geoLocationManager.getPoiInfo().then((poiInfo) => {
      if (poiInfo !== undefined) {
        console.info("get PoiInfo:" + JSON.stringify(poiInfo));
      }
    })
  }
} catch (error) {
  console.error("getPoiInfo errCode:" + error.code + ", errMessage:" + error.message);
}

```

