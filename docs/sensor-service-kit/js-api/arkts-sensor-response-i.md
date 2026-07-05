# Response

Describes the timestamp of the sensor data.

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## accuracy

```TypeScript
accuracy: SensorAccuracy
```

Accuracy of the sensor data.

**Type:** SensorAccuracy

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

## timestamp

```TypeScript
timestamp: long
```

Timestamp when the sensor reports data. Time from device startup to data reporting, in nanoseconds.

**Type:** long

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

