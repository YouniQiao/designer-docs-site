# ContinuousLocationRequest

Configuring parameters in continuous location requests.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@ohos.geoLocationManager';
```

## interval

```TypeScript
interval: number
```

Location report interval, in seconds.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Location.Location.Core

## locationScenario

```TypeScript
locationScenario: UserActivityScenario | PowerConsumptionScenario
```

Location scenario. You can select a user activity scenario or power consumption scenario.

**Type:** UserActivityScenario | PowerConsumptionScenario

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

