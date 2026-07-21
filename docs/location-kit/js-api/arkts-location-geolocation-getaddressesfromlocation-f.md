# getAddressesFromLocation

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

<a id="getaddressesfromlocation"></a>
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
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;GeoAddress&gt;&gt; | Yes | Indicates the callback for reporting the address info. |

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


<a id="getaddressesfromlocation-1"></a>
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
| Promise&lt;Array&lt;GeoAddress&gt;&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let reverseGeocodeRequest:geolocation.ReverseGeoCodeRequest = {"latitude": 31.12, "longitude": 121.11, "maxItems": 1};
geolocation.getAddressesFromLocation(reverseGeocodeRequest).then((data) => {
    console.info('getAddressesFromLocation: ' + JSON.stringify(data));
});

```

