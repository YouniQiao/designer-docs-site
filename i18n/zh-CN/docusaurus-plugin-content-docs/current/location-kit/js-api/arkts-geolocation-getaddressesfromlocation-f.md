# getAddressesFromLocation

## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain address info from location

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getAddressesFromLocation

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | ReverseGeoCodeRequest | 是 | Indicates the reverse geocode query parameters. |
| callback | AsyncCallback&lt;Array&lt;GeoAddress>> | 是 | Indicates the callback for reporting the address info. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let reverseGeocodeRequest:geolocation.ReverseGeoCodeRequest = {"latitude": 31.12, "longitude": 121.11, "maxItems": 1};
geolocation.getAddressesFromLocation(reverseGeocodeRequest, (err, data) => {
    if (err) {
        console.info('getAddressesFromLocation: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('getAddressesFromLocation: data=' + JSON.stringify(data));
    }
});

```

## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>
```

Obtain address info from location

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.geoLocationManager/geoLocationManager.getAddressesFromLocation

**需要权限：** 

 ohos.permission.LOCATION

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | ReverseGeoCodeRequest | 是 | Indicates the reverse geocode query parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;GeoAddress>> | The promise returned by the function. |

**示例：**

```TypeScript
import geolocation from '@ohos.geolocation';
let reverseGeocodeRequest:geolocation.ReverseGeoCodeRequest = {"latitude": 31.12, "longitude": 121.11, "maxItems": 1};
geolocation.getAddressesFromLocation(reverseGeocodeRequest).then((data) => {
    console.info('getAddressesFromLocation: ' + JSON.stringify(data));
});

```

