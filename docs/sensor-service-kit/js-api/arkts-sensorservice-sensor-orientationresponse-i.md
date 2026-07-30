# OrientationResponse

Describes the orientation sensor data. It extends from [Response](arkts-sensorservice-sensor-response-i.md).

**Inheritance/Implementation:** OrientationResponse extends [Response](arkts-sensorservice-sensor-response-i.md)

**Since:** 8

<!--Device-sensor-interface OrientationResponse extends Response--><!--Device-sensor-interface OrientationResponse extends Response-End-->

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## alpha

```TypeScript
alpha: number
```

Rotation angle of the device around the z-axis, in degrees. The value ranges from 0 to 360.

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-OrientationResponse-alpha: double--><!--Device-OrientationResponse-alpha: double-End-->

**System capability:** SystemCapability.Sensors.Sensor

## beta

```TypeScript
beta: number
```

Rotation angle of the device around the x-axis, in degrees. The value ranges from 0 to ��180.

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-OrientationResponse-beta: double--><!--Device-OrientationResponse-beta: double-End-->

**System capability:** SystemCapability.Sensors.Sensor

## gamma

```TypeScript
gamma: number
```

Rotation angle of the device around the y-axis, in degrees. The value ranges from 0 to ��90.

**Type:** number

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-OrientationResponse-gamma: double--><!--Device-OrientationResponse-gamma: double-End-->

**System capability:** SystemCapability.Sensors.Sensor

