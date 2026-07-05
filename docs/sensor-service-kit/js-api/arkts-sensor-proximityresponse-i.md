# ProximityResponse

Describes the proximity sensor data. It extends from [Response]sensor.Response.

**Inheritance:** ProximityResponseextends: Response.

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## distance

```TypeScript
distance: double
```

Proximity between the visible object and the device monitor. The value **0** means the two are close to each other, and a value greater than 0 means that they are far away from each other.

**Type:** double

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

