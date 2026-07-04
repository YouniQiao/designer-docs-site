# isCachedGnssServiceSupported

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## isCachedGnssServiceSupported

```TypeScript
function isCachedGnssServiceSupported(): boolean
```

Check whether the cached GNSS service is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if cached service is available, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [3301000](../errorcode-geoLocationManager.md#3301000-location-service-unavailable) | The location service is unavailable. |

