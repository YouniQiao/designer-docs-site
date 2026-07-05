# isPoiServiceSupported

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## isPoiServiceSupported

```TypeScript
function isPoiServiceSupported(): boolean
```

Check whether the POI service is supported.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Location.Location.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if POI service is available, returns {@code false} otherwise. |

**Example**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let poiServiceState = geoLocationManager.isPoiServiceSupported();
console.info("poiServiceState:" + poiServiceState);

```

