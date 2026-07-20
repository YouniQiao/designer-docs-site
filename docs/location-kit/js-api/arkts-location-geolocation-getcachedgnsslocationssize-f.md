# getCachedGnssLocationsSize

## Modules to Import

```TypeScript
import { geolocation } from '@kit.LocationKit';
```

## getCachedGnssLocationsSize

```TypeScript
function getCachedGnssLocationsSize(callback: AsyncCallback<number>): void
```

Obtain the number of cached GNSS locations reported at a time

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getCachedGnssLocationsSize

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function getCachedGnssLocationsSize(callback: AsyncCallback<number>): void--><!--Device-geolocation-function getCachedGnssLocationsSize(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Indicates the callback for reporting the cached GNSS locations size. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.getCachedGnssLocationsSize((err, size) => {
    if (err) {
        console.info('getCachedGnssLocationsSize: err=' + JSON.stringify(err));
    }
    if (size) {
        console.info('getCachedGnssLocationsSize: size=' + JSON.stringify(size));
    }
});

```


## getCachedGnssLocationsSize

```TypeScript
function getCachedGnssLocationsSize(): Promise<number>
```

Obtain the number of cached GNSS locations reported at a time

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getCachedGnssLocationsSize

**Required permissions:** ohos.permission.LOCATION

<!--Device-geolocation-function getCachedGnssLocationsSize(): Promise<number>--><!--Device-geolocation-function getCachedGnssLocationsSize(): Promise<number>-End-->

**System capability:** SystemCapability.Location.Location.Gnss

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.getCachedGnssLocationsSize().then((result) => {
    console.info('promise, getCachedGnssLocationsSize: ' + JSON.stringify(result));
});

```

