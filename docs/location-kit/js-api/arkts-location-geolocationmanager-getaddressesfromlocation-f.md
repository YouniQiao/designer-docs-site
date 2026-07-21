# getAddressesFromLocation

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

<a id="getaddressesfromlocation"></a>
## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain address info from location.

**Since:** 9

<!--Device-geoLocationManager-function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void--><!--Device-geoLocationManager-function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [ReverseGeoCodeRequest](arkts-location-geolocation-reversegeocoderequest-i.md) | Yes | Indicates the reverse geocode query parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;GeoAddress&gt;&gt; | Yes | Indicates the callback for reporting the address info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getAddressesFromLocation} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301300](../errorcode-geoLocationManager.md#3301300-query-failed-during-reverse-geocoding) | Reverse geocoding query failed. |

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


<a id="getaddressesfromlocation-1"></a>
## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>
```

Obtain address info from location.

**Since:** 9

<!--Device-geoLocationManager-function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>--><!--Device-geoLocationManager-function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [ReverseGeoCodeRequest](arkts-location-geolocation-reversegeocoderequest-i.md) | Yes | Indicates the reverse geocode query parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GeoAddress&gt;&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getAddressesFromLocation} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301300](../errorcode-geoLocationManager.md#3301300-query-failed-during-reverse-geocoding) | Reverse geocoding query failed. |

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

