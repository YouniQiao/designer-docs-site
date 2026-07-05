# getLastLocation

## getLastLocation

```TypeScript
function getLastLocation(): Location
```

Obtain last known location.

**Since:** 22

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| Location | The last known location information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application  does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getLastLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the geographical location. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let location = geoLocationManager.getLastLocation();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

