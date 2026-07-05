# SensorInfoParam

Defines sensor parameters, including **deviceId** and **sensorIndex**.

**Since:** 19

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## sensorIndex

```TypeScript
sensorIndex?: int
```

Sensor index. The default value is **0**, indicating the default sensor on the device. You can use [getSensorList]sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>) or [sensorStatusChange]sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>) to obtain the sensor index.

**Type:** int

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

## deviceId

```TypeScript
deviceId?: int
```

Device ID. The default value is -1, indicating the local device. You can use [getSensorList]sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>) or [sensorStatusChange]sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>) to obtain the device ID.

**Type:** int

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Sensors.Sensor

