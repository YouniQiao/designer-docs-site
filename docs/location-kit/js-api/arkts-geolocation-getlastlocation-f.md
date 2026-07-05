# getLastLocation

## getLastLocation

```TypeScript
function getLastLocation(callback: AsyncCallback<Location>): void
```

Obtain last known location

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.geoLocationManager/geoLocationManager.getLastLocation

**Required permissions:** 

 ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Location> | Yes | Indicates the callback for reporting the location result. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.getLastLocation((err, data) => {
    if (err) {
        console.info('getLastLocation: err=' + JSON.stringify(err));
    }
    if (data) {
        console.info('getLastLocation: data=' + JSON.stringify(data));
    }
});

```

## getLastLocation

```TypeScript
function getLastLocation(): Promise<Location>
```

Obtain last known location

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.geoLocationManager/geoLocationManager.getLastLocation

**Required permissions:** 

 ohos.permission.LOCATION

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Location> | The promise returned by the function. |

**Example**

```TypeScript
import geolocation from '@ohos.geolocation';
geolocation.getLastLocation().then((result) => {
    console.info('getLastLocation: result: ' + JSON.stringify(result));
});

```

