# getAddressesFromLocation

## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain address info from location.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | ReverseGeoCodeRequest | 是 | Indicates the reverse geocode query parameters. |
| callback | AsyncCallback&lt;Array&lt;GeoAddress>> | 是 | Indicates the callback for reporting the address info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301300 | Reverse geocoding query failed. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let reverseGeocodeRequest: geoLocationManager.ReverseGeoCodeRequest = {
  "latitude": 31.12,
  "longitude": 121.11,
  "maxItems": 1
};
try {
  geoLocationManager.getAddressesFromLocation(reverseGeocodeRequest, (err, data) => {
    if (err) {
      console.error('getAddressesFromLocation: err=' + JSON.stringify(err));
    }
    if (data) {
      console.info('getAddressesFromLocation: data=' + JSON.stringify(data));
    }
  });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>
```

Obtain address info from location.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | ReverseGeoCodeRequest | 是 | Indicates the reverse geocode query parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;GeoAddress>> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301300 | Reverse geocoding query failed. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let reverseGeocodeRequest: geoLocationManager.ReverseGeoCodeRequest = {
  "latitude": 31.12,
  "longitude": 121.11,
  "maxItems": 1
};
try {
  geoLocationManager.getAddressesFromLocation(reverseGeocodeRequest).then((data) => {
    console.info('getAddressesFromLocation: ' + JSON.stringify(data));
  })
    .catch((error: BusinessError) => {
      console.error('promise, getAddressesFromLocation: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

