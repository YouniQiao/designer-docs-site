# getAddressesFromLocationName

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
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

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | GeoCodeRequest | Yes | Indicates the geocode query parameters. |
| callback | AsyncCallback&lt;Array&lt;GeoAddress&gt;&gt; | Yes | Indicates the callback for reporting the latitude and longitude result. |

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

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | GeoCodeRequest | Yes | Indicates the geocode query parameters. |

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

