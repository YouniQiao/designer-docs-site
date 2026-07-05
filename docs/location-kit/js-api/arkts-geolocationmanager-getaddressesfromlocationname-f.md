# getAddressesFromLocationName

## getAddressesFromLocationName

```TypeScript
function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain latitude and longitude info from location address.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | GeoCodeRequest | Yes | Indicates the geocode query parameters. |
| callback | AsyncCallback&lt;Array&lt;GeoAddress>> | Yes | Indicates the callback for reporting the  latitude and longitude result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are  left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301400 | Geocoding query failed. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let geocodeRequest: geoLocationManager.GeoCodeRequest = { "description": "No. xx, xx Road, Pudong District, Shanghai", "maxItems": 1};
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

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | GeoCodeRequest | Yes | Indicates the geocode query parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GeoAddress>> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301400 | Geocoding query failed. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

let geocodeRequest: geoLocationManager.GeoCodeRequest = { "description": "No. xx, xx Road, Pudong District, Shanghai", "maxItems": 1};
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

