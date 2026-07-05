# isGeocoderAvailable

## isGeocoderAvailable

```TypeScript
function isGeocoderAvailable(): boolean
```

Obtain geocoding service status.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Geocoder

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if geocoding service is available,  returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.isGeocoderAvailable} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isAvailable = geoLocationManager.isGeocoderAvailable();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

