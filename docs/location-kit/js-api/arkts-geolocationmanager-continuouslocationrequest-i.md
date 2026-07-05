# ContinuousLocationRequest

Configuring parameters in continuous location requests.

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

## locationScenario

```TypeScript
locationScenario: UserActivityScenario | PowerConsumptionScenario
```

Location scenario. You can select a user activity scenario or power consumption scenario.

**Type:** UserActivityScenario | PowerConsumptionScenario

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## interval

```TypeScript
interval: int
```

Location report interval, in seconds.

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## sportsType

```TypeScript
sportsType?: SportsType
```

Indicates the type of sports. This parameter is valid only when locationScenario is set to UserActivityScenario.SPORT.

**Type:** SportsType

**Since:** 18

**Atomic service API:** From API version 18 this API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

**System API:** This is a system API.

