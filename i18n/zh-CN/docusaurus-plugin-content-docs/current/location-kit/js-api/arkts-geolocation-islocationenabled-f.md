# isLocationEnabled

## isLocationEnabled

```TypeScript
function isLocationEnabled(callback: AsyncCallback<boolean>): void
```

Obtain current location switch status

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.isLocationEnabled

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for reporting the location switch result. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isLocationEnabled((err, data) => {
    if (err) {
        console.info('isLocationEnabled: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('isLocationEnabled: data=' + JSON.stringify(data));
    }
});

```

## isLocationEnabled

```TypeScript
function isLocationEnabled(): Promise<boolean>
```

Obtain current location switch status

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.isLocationEnabled

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isLocationEnabled().then((result) => {
    console.info('promise, isLocationEnabled: ' + JSON.stringify(result));
});

```

