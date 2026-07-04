# isGeoServiceAvailable

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
```

## isGeoServiceAvailable

```TypeScript
function isGeoServiceAvailable(callback: AsyncCallback<boolean>): void
```

Obtain geocode service status

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isGeocoderAvailable

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for reporting the geocode service status. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isGeoServiceAvailable((err, data) => {
    if (err) {
        console.info('isGeoServiceAvailable: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('isGeoServiceAvailable: data=' + JSON.stringify(data));
    }
});

```


## isGeoServiceAvailable

```TypeScript
function isGeoServiceAvailable(): Promise<boolean>
```

Obtain geocode service status

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isGeocoderAvailable

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Geocoder

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isGeoServiceAvailable().then((result) => {
    console.info('promise, isGeoServiceAvailable: ' + JSON.stringify(result));
});

```

