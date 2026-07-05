# getCachedGnssLocationsSize

## getCachedGnssLocationsSize

```TypeScript
function getCachedGnssLocationsSize(callback: AsyncCallback<int>): void
```

Obtain the number of cached GNSS locations reported at a time.

**Since:** 22

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | Indicates the callback for reporting the cached GNSS locations size. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.getCachedGnssLocationsSize((err, size) => {
    if (err) {
      console.error('getCachedGnssLocationsSize: err=' + JSON.stringify(err));
    }
    if (size) {
      console.info('getCachedGnssLocationsSize: size=' + JSON.stringify(size));
    }
  });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getCachedGnssLocationsSize

```TypeScript
function getCachedGnssLocationsSize(): Promise<int>
```

Obtain the number of cached GNSS locations.

**Since:** 22

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Location.Location.Gnss

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  geoLocationManager.getCachedGnssLocationsSize().then((result) => {
    console.info('promise, getCachedGnssLocationsSize: ' + JSON.stringify(result));
  })
    .catch((error: BusinessError) => {
      console.error('promise, getCachedGnssLocationsSize: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

