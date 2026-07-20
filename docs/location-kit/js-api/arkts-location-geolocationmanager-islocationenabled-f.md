# isLocationEnabled

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## isLocationEnabled

```TypeScript
function isLocationEnabled(): boolean
```

Obtain current location switch status.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-geoLocationManager-function isLocationEnabled(): boolean--><!--Device-geoLocationManager-function isLocationEnabled(): boolean-End-->

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the location switch on, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.isLocationEnabled} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let locationEnabled = geoLocationManager.isLocationEnabled();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

