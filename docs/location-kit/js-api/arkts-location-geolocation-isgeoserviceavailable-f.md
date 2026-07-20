# isGeoServiceAvailable

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
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

<!--Device-geolocation-function isGeoServiceAvailable(callback: AsyncCallback<boolean>): void--><!--Device-geolocation-function isGeoServiceAvailable(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Indicates the callback for reporting the geocode service status. |

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

<!--Device-geolocation-function isGeoServiceAvailable(): Promise<boolean>--><!--Device-geolocation-function isGeoServiceAvailable(): Promise<boolean>-End-->

**System capability:** SystemCapability.Location.Location.Geocoder

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.isGeoServiceAvailable().then((result) => {
    console.info('promise, isGeoServiceAvailable: ' + JSON.stringify(result));
});

```

