# SingleLocationRequest

Configuring parameters in single location requests.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## locatingPriority

```TypeScript
locatingPriority: LocatingPriority
```

Priority of the location request.

**Type:** LocatingPriority

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Location.Location.Core

## locatingTimeoutMs

```TypeScript
locatingTimeoutMs: number
```

Timeout of a single location request, in milliseconds.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Location.Location.Core

## needPoi

```TypeScript
needPoi?: boolean
```

Indicates whether to obtain POI information near the current location.

**Type:** boolean

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Location.Location.Core

