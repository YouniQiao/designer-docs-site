# flushCachedGnssLocations

## Modules to Import

```TypeScript
import { geolocation } from '@ohos.geolocation';
```

## flushCachedGnssLocations

```TypeScript
function flushCachedGnssLocations(callback: AsyncCallback<boolean>): void
```

All prepared GNSS locations are returned to the application through the callback function, and the bottom-layer buffer is cleared.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** flushCachedGnssLocations

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for reporting the result. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.flushCachedGnssLocations((err, result) => {
    if (err) {
        console.info('flushCachedGnssLocations: err=' + JSON.stringify(err));
    }
    if (result) {
        console.info('flushCachedGnssLocations: result=' + JSON.stringify(result));
    }
});

```


## flushCachedGnssLocations

```TypeScript
function flushCachedGnssLocations(): Promise<boolean>
```

All prepared GNSS locations are returned to the application through the callback function, and the bottom-layer buffer is cleared.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** flushCachedGnssLocations

**Required permissions:** ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.flushCachedGnssLocations().then((result) => {
    console.info('promise, flushCachedGnssLocations: ' + JSON.stringify(result));
});

```

