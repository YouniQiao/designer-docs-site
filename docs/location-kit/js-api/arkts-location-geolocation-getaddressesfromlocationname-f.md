# getAddressesFromLocationName

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## getAddressesFromLocationName

```TypeScript
function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain latitude and longitude info from location address

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAddressesFromLocationName

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void--><!--Device-geolocation-function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [GeoCodeRequest](arkts-location-geolocationmanager-geocoderequest-i.md) | Yes | Indicates the geocode query parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<GeoAddress>> | Yes | Indicates the callback for reporting the latitude and longitude result. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let geocodeRequest:geolocation.GeoCodeRequest = {"description": "No. xx, xx Road, Pudong District, Shanghai", "maxItems": 1};
geolocation.getAddressesFromLocationName(geocodeRequest, (err, data) => {
    if (err) {
        console.info('getAddressesFromLocationName: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('getAddressesFromLocationName: data=' + JSON.stringify(data));
    }
});

```


## getAddressesFromLocationName

```TypeScript
function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>
```

Obtain latitude and longitude info from location address

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAddressesFromLocationName

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>--><!--Device-geolocation-function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [GeoCodeRequest](arkts-location-geolocationmanager-geocoderequest-i.md) | Yes | Indicates the geocode query parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<GeoAddress>> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let geocodeRequest:geolocation.GeoCodeRequest = {"description": "No. xx, xx Road, Pudong District, Shanghai", "maxItems": 1};
geolocation.getAddressesFromLocationName(geocodeRequest).then((result) => {
    console.info('getAddressesFromLocationName: ' + JSON.stringify(result));
});

```

