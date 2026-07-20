# getAddressesFromLocation

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## getAddressesFromLocation

```TypeScript
function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void
```

Obtain address info from location

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAddressesFromLocation

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void--><!--Device-geolocation-function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [ReverseGeoCodeRequest](arkts-location-geolocation-reversegeocoderequest-i.md) | Yes | Indicates the reverse geocode query parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<GeoAddress>> | Yes | Indicates the callback for reporting the address info. |

**Example**

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

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAddressesFromLocation

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>--><!--Device-geolocation-function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [ReverseGeoCodeRequest](arkts-location-geolocation-reversegeocoderequest-i.md) | Yes | Indicates the reverse geocode query parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<GeoAddress>> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let reverseGeocodeRequest:geolocation.ReverseGeoCodeRequest = {"latitude": 31.12, "longitude": 121.11, "maxItems": 1};
geolocation.getAddressesFromLocation(reverseGeocodeRequest).then((data) => {
    console.info('getAddressesFromLocation: ' + JSON.stringify(data));
});

```

