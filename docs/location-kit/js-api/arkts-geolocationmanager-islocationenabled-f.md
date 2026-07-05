# isLocationEnabled

## isLocationEnabled

```TypeScript
function isLocationEnabled(): boolean
```

Obtain current location switch status.

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the location switch on, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.isLocationEnabled} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let locationEnabled = geoLocationManager.isLocationEnabled();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

