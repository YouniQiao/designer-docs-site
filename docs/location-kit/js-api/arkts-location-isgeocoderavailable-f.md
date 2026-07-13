# isGeocoderAvailable

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

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
| boolean | Returns {@code true} if geocoding service is available,returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call${geoLocationManager.isGeocoderAvailable} due to limited device capabilities. |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isAvailable = geoLocationManager.isGeocoderAvailable();
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

