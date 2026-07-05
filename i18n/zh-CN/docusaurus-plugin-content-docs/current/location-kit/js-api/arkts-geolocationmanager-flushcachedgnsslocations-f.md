# flushCachedGnssLocations

## flushCachedGnssLocations

```TypeScript
function flushCachedGnssLocations(callback: AsyncCallback<void>): void
```

All prepared GNSS locations are returned to the application through the callback function, and the bottom-layer buffer is cleared.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Indicates the callback for reporting the error message.  If the function fails to execute, the error message will be carried in the first parameter  err of AsyncCallback,  If the function executes successfully, execute the callback function only, no data will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.flushCachedGnssLocations} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  if (geoLocationManager.isCachedGnssServiceSupported()) {
    geoLocationManager.flushCachedGnssLocations((err) => {
      if (err) {
        console.error('flushCachedGnssLocations: err=' + JSON.stringify(err));
      }
    });
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## flushCachedGnssLocations

```TypeScript
function flushCachedGnssLocations(): Promise<void>
```

All prepared GNSS locations are returned to the application, and the bottom-layer buffer is cleared.

**起始版本：** 22

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.flushCachedGnssLocations} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  if (geoLocationManager.isCachedGnssServiceSupported()) {
    geoLocationManager.flushCachedGnssLocations().then(() => {
      console.info('promise, flushCachedGnssLocations success');
    })
      .catch((error: BusinessError) => {
        console.error('promise, flushCachedGnssLocations: error=' + JSON.stringify(error));
      });
  }
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

