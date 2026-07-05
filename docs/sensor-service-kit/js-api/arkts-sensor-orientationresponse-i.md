# OrientationResponse

Describes the orientation sensor data. It extends from [Response]sensor.Response.

**Inheritance:** OrientationResponseextends: Response.

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## alpha

```TypeScript
alpha: double
```

Rotation angle of the device around the z-axis, in degrees. The value ranges from 0 to 360.

**Type:** double

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

## gamma

```TypeScript
gamma: double
```

Rotation angle of the device around the y-axis, in degrees. The value ranges from 0 to ��90.

**Type:** double

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

## beta

```TypeScript
beta: double
```

Rotation angle of the device around the x-axis, in degrees. The value ranges from 0 to ��180.

**Type:** double

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

