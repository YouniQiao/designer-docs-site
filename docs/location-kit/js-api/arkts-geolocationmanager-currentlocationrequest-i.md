# CurrentLocationRequest

Configuring parameters in current location requests.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## scenario

```TypeScript
scenario?: LocationRequestScenario
```

User scenario of the location request.

**Type:** LocationRequestScenario

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## timeoutMs

```TypeScript
timeoutMs?: int
```

Timeout interval of a single location request.

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## priority

```TypeScript
priority?: LocationRequestPriority
```

Priority of the location request.

**Type:** LocationRequestPriority

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## maxAccuracy

```TypeScript
maxAccuracy?: double
```

Accuracy requirements for reporting locations.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

