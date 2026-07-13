# disableLocation (System API)

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## disableLocation

```TypeScript
function disableLocation(): void
```

Disable location switch.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call ${geoLocationManager.disableLocation} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.disableLocation();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

