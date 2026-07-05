# getLocationIconStatus

## getLocationIconStatus

```TypeScript
function getLocationIconStatus(): LocationIconStatus
```

Get location icon status.

**Since:** 12

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| LocationIconStatus | The location icon status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.getLocationIconStatus} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let iconStatus = geoLocationManager.getLocationIconStatus();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

