# SensorInfoParam

Defines sensor parameters, including **deviceId** and **sensorIndex**.

**Since:** 19

<!--Device-sensor-interface SensorInfoParam--><!--Device-sensor-interface SensorInfoParam-End-->

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## deviceId

```TypeScript
deviceId?: number
```

Device ID. The default value is -1, indicating the local device. You can use [getSensorList](arkts-sensorservice-sensor-getsensorlist-f.md#getsensorlist-1) or [sensorStatusChange](arkts-sensorservice-sensor-on-f.md#on-46) to obtain the device ID.

**Type:** number

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-SensorInfoParam-deviceId?: int--><!--Device-SensorInfoParam-deviceId?: int-End-->

**System capability:** SystemCapability.Sensors.Sensor

## sensorIndex

```TypeScript
sensorIndex?: number
```

Sensor index. The default value is **0**, indicating the default sensor on the device. You can use [getSensorList](arkts-sensorservice-sensor-getsensorlist-f.md#getsensorlist-1) or [sensorStatusChange](arkts-sensorservice-sensor-on-f.md#on-46) to obtain the sensor index.

**Type:** number

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-SensorInfoParam-sensorIndex?: int--><!--Device-SensorInfoParam-sensorIndex?: int-End-->

**System capability:** SystemCapability.Sensors.Sensor

