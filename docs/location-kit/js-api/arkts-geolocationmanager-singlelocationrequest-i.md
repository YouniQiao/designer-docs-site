# SingleLocationRequest

Configuring parameters in single location requests.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## needPoi

```TypeScript
needPoi?: boolean
```

Indicates whether to obtain POI information near the current location.

**Type:** boolean

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## locatingTimeoutMs

```TypeScript
locatingTimeoutMs: int
```

Timeout of a single location request, in milliseconds.

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## locatingPriority

```TypeScript
locatingPriority: LocatingPriority
```

Priority of the location request.

**Type:** LocatingPriority

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

