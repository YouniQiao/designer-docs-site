# isBeaconFenceSupported

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## isBeaconFenceSupported

```TypeScript
function isBeaconFenceSupported(): boolean
```

Check whether the BeaconFence service is supported.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Location.Location.Geofence

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if BeaconFence service is available, returns {@code false} otherwise. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isBeaconFenceSupported = geoLocationManager.isBeaconFenceSupported();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

