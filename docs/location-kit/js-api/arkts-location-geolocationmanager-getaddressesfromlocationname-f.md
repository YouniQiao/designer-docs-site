# getAddressesFromLocationName

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## getAddressesFromLocationName

```TypeScript
function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain latitude and longitude info from location address.

**Since:** 9

<!--Device-geoLocationManager-function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void--><!--Device-geoLocationManager-function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [GeoCodeRequest](arkts-location-geolocationmanager-geocoderequest-i.md) | Yes | Indicates the geocode query parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<GeoAddress>> | Yes | Indicates the callback for reporting the latitude and longitude result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301400](../errorcode-geoLocationManager.md#3301400-query-failed-during-geocoding) | Geocoding query failed. |

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

**Since:** 9

<!--Device-geoLocationManager-function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>--><!--Device-geoLocationManager-function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [GeoCodeRequest](arkts-location-geolocationmanager-geocoderequest-i.md) | Yes | Indicates the geocode query parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<GeoAddress>> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |
| [3301400](../errorcode-geoLocationManager.md#3301400-query-failed-during-geocoding) | Geocoding query failed. |

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

