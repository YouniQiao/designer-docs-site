# getAddressesFromLocationName

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

<a id="getaddressesfromlocationname"></a>
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
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;GeoAddress&gt;&gt; | Yes | Indicates the callback for reporting the latitude and longitude result. |

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


<a id="getaddressesfromlocationname-1"></a>
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
| Promise&lt;Array&lt;GeoAddress&gt;&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
let geocodeRequest:geolocation.GeoCodeRequest = {"description": "No. xx, xx Road, Pudong District, Shanghai", "maxItems": 1};
geolocation.getAddressesFromLocationName(geocodeRequest).then((result) => {
    console.info('getAddressesFromLocationName: ' + JSON.stringify(result));
});

```

