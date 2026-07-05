# getAddressesFromLocation

## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain address info from location.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | ReverseGeoCodeRequest | Yes | Indicates the reverse geocode query parameters. |
| callback | AsyncCallback&lt;Array&lt;GeoAddress>> | Yes | Indicates the callback for reporting the address info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301300 | Reverse geocoding query failed. |

**Example**

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

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | ReverseGeoCodeRequest | Yes | Indicates the reverse geocode query parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GeoAddress>> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory  parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301300 | Reverse geocoding query failed. |

**Example**

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

