# getCachedGnssLocationsSize

## getCachedGnssLocationsSize

```TypeScript
function getCachedGnssLocationsSize(callback: AsyncCallback<int>): void
```

Obtain the number of cached GNSS locations reported at a time.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | 是 | Indicates the callback for reporting the cached GNSS locations size. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  if (geoLocationManager.isCachedGnssServiceSupported()) {
    geoLocationManager.getCachedGnssLocationsSize((err, size) => {
      if (err) {
        console.error('getCachedGnssLocationsSize: err=' + JSON.stringify(err));
      }
      if (size) {
        console.info('getCachedGnssLocationsSize: size=' + JSON.stringify(size));
      }
    });
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getCachedGnssLocationsSize

```TypeScript
function getCachedGnssLocationsSize(): Promise<int>
```

Obtain the number of cached GNSS locations.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  if (geoLocationManager.isCachedGnssServiceSupported()) {
    geoLocationManager.getCachedGnssLocationsSize().then((result) => {
      console.info('promise, getCachedGnssLocationsSize: ' + JSON.stringify(result));
    })
      .catch((error: BusinessError) => {
        console.error('promise, getCachedGnssLocationsSize: error=' + JSON.stringify(error));
      });
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

