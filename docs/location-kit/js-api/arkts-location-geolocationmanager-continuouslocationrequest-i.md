# ContinuousLocationRequest

Configuring parameters in continuous location requests.

**Since:** 12

<!--Device-geoLocationManager-export interface ContinuousLocationRequest--><!--Device-geoLocationManager-export interface ContinuousLocationRequest-End-->

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## interval

```TypeScript
interval: number
```

Location report interval, in seconds.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ContinuousLocationRequest-interval: int--><!--Device-ContinuousLocationRequest-interval: int-End-->

**System capability:** SystemCapability.Location.Location.Core

## locationScenario

```TypeScript
locationScenario: UserActivityScenario | PowerConsumptionScenario
```

Location scenario. You can select a user activity scenario or power consumption scenario.

**Type:** UserActivityScenario | PowerConsumptionScenario

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ContinuousLocationRequest-locationScenario: UserActivityScenario | PowerConsumptionScenario--><!--Device-ContinuousLocationRequest-locationScenario: UserActivityScenario | PowerConsumptionScenario-End-->

**System capability:** SystemCapability.Location.Location.Core

## needPoi

```TypeScript
needPoi?: boolean
```

Indicates whether to obtain POI information near the current location.

**Type:** boolean

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ContinuousLocationRequest-needPoi?: boolean--><!--Device-ContinuousLocationRequest-needPoi?: boolean-End-->

**System capability:** SystemCapability.Location.Location.Core

