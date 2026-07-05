# getLastLocation

## getLastLocation

```TypeScript
function getLastLocation(callback: AsyncCallback<Location>): void
```

Obtain last known location

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getLastLocation

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Location> | 是 | Indicates the callback for reporting the location result. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.getLastLocation((err, data) => {
    if (err) {
        console.info('getLastLocation: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('getLastLocation: data=' + JSON.stringify(data));
    }
});

```

## getLastLocation

```TypeScript
function getLastLocation(): Promise<Location>
```

Obtain last known location

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getLastLocation

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Location> | The promise returned by the function. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.getLastLocation().then((result) => {
    console.info('getLastLocation: result: ' + JSON.stringify(result));
});

```

