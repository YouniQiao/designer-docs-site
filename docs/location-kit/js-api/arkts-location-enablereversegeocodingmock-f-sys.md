# enableReverseGeocodingMock (System API)

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## enableReverseGeocodingMock

```TypeScript
function enableReverseGeocodingMock(): void
```

Enable the reverse geocoding simulation function.

**Since:** 20

**Required permissions:** ohos.permission.MOCK_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call ${geoLocationManager.enableReverseGeocodingMock} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.enableReverseGeocodingMock();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

