# flushCachedGnssLocations

## flushCachedGnssLocations

```TypeScript
function flushCachedGnssLocations(callback: AsyncCallback<boolean>): void
```

All prepared GNSS locations are returned to the application through the callback function, and the bottom-layer buffer is cleared.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.flushCachedGnssLocations

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for reporting the result. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.flushCachedGnssLocations((err, result) => {
    if (err) {
        console.info('flushCachedGnssLocations: err=' + JSON.stringify(err));
    }
    if (result) {
        console.info('flushCachedGnssLocations: result=' + JSON.stringify(result));
    }
});

```

## flushCachedGnssLocations

```TypeScript
function flushCachedGnssLocations(): Promise<boolean>
```

All prepared GNSS locations are returned to the application through the callback function, and the bottom-layer buffer is cleared.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.flushCachedGnssLocations

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Gnss

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.flushCachedGnssLocations().then((result) => {
    console.info('promise, flushCachedGnssLocations: ' + JSON.stringify(result));
});

```

