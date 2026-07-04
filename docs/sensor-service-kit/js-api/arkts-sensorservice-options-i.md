# Options

Describes the sensor data reporting frequency.

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@ohos.sensor';
```

## interval

```TypeScript
interval?: number | SensorFrequency
```

Frequency at which a sensor reports data. The default value is 200,000,000 ns. The maximum and minimum values of this parameter are determined by the reporting frequency supported by the hardware. If the configured frequency is greater than the maximum value, the maximum value is used for data reporting. If the configured frequency is less than the minimum value, the minimum value is used for data reporting.

**Type:** number | SensorFrequency

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Sensors.Sensor

## sensorInfoParam

```TypeScript
sensorInfoParam?: SensorInfoParam
```

Sensor parameters, including **deviceId** and **sensorIndex**. This API can be used in atomic services since API version 19.

**Type:** SensorInfoParam

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Sensors.Sensor

