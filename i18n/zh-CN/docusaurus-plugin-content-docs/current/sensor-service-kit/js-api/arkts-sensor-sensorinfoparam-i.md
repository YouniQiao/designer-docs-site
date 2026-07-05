# SensorInfoParam

Defines sensor parameters, including **deviceId** and **sensorIndex**.

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## sensorIndex

```TypeScript
sensorIndex?: int
```

Sensor index. The default value is **0**, indicating the default sensor on the device. You can use [getSensorList]sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>) or [sensorStatusChange]sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>) to obtain the sensor index.

**类型：** int

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

## deviceId

```TypeScript
deviceId?: int
```

Device ID. The default value is -1, indicating the local device. You can use [getSensorList]sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>) or [sensorStatusChange]sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>) to obtain the device ID.

**类型：** int

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

