# HallResponse

Describes the Hall effect sensor data. It extends from [Response]sensor.Response.

**Inheritance:** HallResponseextends: Response.

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## status

```TypeScript
status: double
```

Hall effect sensor status. This parameter specifies whether a magnetic field exists around a device. The value **0** means that a magnetic field does not exist, and a value greater than **0** means the opposite.

**Type:** double

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

