# Location

Provides information about geographic locations.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## additionSize

```TypeScript
additionSize?: int
```

Indicates the amount of additional descriptive information.

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## altitude

```TypeScript
altitude: double
```

Indicates location altitude, in meters.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## additions

```TypeScript
additions?: Array<string>
```

Indicates additional information.

**Type:** Array<string>

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## latitude

```TypeScript
latitude: double
```

Indicates latitude information. A positive value indicates north latitude, and a negative value indicates south latitude.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## altitudeAccuracy

```TypeScript
altitudeAccuracy?: double
```

Indicates vertical position accuracy in meters.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## accuracy

```TypeScript
accuracy: double
```

Indicates location accuracy, in meters.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## poi

```TypeScript
poi?: PoiInfo
```

Indicates the poi information.

**Type:** PoiInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## speedAccuracy

```TypeScript
speedAccuracy?: double
```

Indicates speed accuracy in meter per seconds.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## additionsMap

```TypeScript
additionsMap?: Map<string, string>
```

Indicates additional information map.

**Type:** Map<string, string>

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## speed

```TypeScript
speed: double
```

Indicates speed, in m/s.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## uncertaintyOfTimeSinceBoot

```TypeScript
uncertaintyOfTimeSinceBoot?: long
```

Time uncertainty Of timeSinceBoot in nanosecond.

**Type:** long

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## timeStamp

```TypeScript
timeStamp: long
```

Indicates location timestamp in the UTC format.

**Type:** long

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## timeSinceBoot

```TypeScript
timeSinceBoot: long
```

Indicates location timestamp since boot.

**Type:** long

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## sourceType

```TypeScript
sourceType?: LocationSourceType
```

Indicates the source of the location.

**Type:** LocationSourceType

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## isFromMock

```TypeScript
isFromMock?: boolean
```

Indicates whether the location is mocked.

**Type:** boolean

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## directionAccuracy

```TypeScript
directionAccuracy?: double
```

Indicates direction accuracy in degrees.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## direction

```TypeScript
direction: double
```

Indicates direction information.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

## longitude

```TypeScript
longitude: double
```

Indicates Longitude information. A positive value indicates east longitude , and a negative value indicates west longitude.

**Type:** double

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Core

