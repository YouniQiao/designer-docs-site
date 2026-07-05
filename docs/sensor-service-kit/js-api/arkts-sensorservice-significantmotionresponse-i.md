# SignificantMotionResponse

Describes the significant motion sensor data. It extends from [Response](arkts-sensorservice-response-i.md#response).

**Inheritance/Implementation:** SignificantMotionResponse extends [Response](arkts-sensorservice-response-i.md#response)

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@ohos.sensor';
```

## scalar

```TypeScript
scalar: number
```

Intensity of a motion. This parameter specifies whether a device has a significant motion on three physical axes (X, Y, and Z). The value **1** is reported when the device has a significant motion.

**Type:** number

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

