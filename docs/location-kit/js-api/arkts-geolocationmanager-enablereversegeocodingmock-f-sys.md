# enableReverseGeocodingMock

## enableReverseGeocodingMock

```TypeScript
function enableReverseGeocodingMock(): void
```

Enable the reverse geocoding simulation function.

**Since:** 20

**Required permissions:** 

 ohos.permission.MOCK_LOCATION

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.enableReverseGeocodingMock} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.enableReverseGeocodingMock();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

