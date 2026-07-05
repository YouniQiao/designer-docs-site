# getAddressesFromLocationName

## getAddressesFromLocationName

```TypeScript
function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain latitude and longitude info from location address.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | GeoCodeRequest | 是 | Indicates the geocode query parameters. |
| callback | AsyncCallback&lt;Array&lt;GeoAddress>> | 是 | Indicates the callback for reporting the  latitude and longitude result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are  left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301400 | Geocoding query failed. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let geocodeRequest: geoLocationManager.GeoCodeRequest = { "description": "上海市浦东新区xx路xx号", "maxItems": 1 };
try {
  geoLocationManager.getAddressesFromLocationName(geocodeRequest, (err, data) => {
    if (err) {
      console.error('getAddressesFromLocationName: err=' + JSON.stringify(err));
    }
    if (data) {
      console.info('getAddressesFromLocationName: data=' + JSON.stringify(data));
    }
  });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getAddressesFromLocationName

```TypeScript
function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>
```

Obtain latitude and longitude info from location address.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | GeoCodeRequest | 是 | Indicates the geocode query parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;GeoAddress>> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301400 | Geocoding query failed. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let geocodeRequest: geoLocationManager.GeoCodeRequest = { "description": "上海市浦东新区xx路xx号", "maxItems": 1 };
try {
  geoLocationManager.getAddressesFromLocationName(geocodeRequest).then((result) => {
    console.info('getAddressesFromLocationName: ' + JSON.stringify(result));
  })
    .catch((error: BusinessError) => {
      console.error('promise, getAddressesFromLocationName: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

