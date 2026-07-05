# Options

Describes the sensor data reporting frequency.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## interval

```TypeScript
interval?: long | SensorFrequency
```

Frequency at which a sensor reports data. The default value is 200,000,000 ns. The maximum and minimum values of this parameter are determined by the reporting frequency supported by the hardware. If the configured frequency is greater than the maximum value, the maximum value is used for data reporting. If the configured frequency is less than the minimum value, the minimum value is used for data reporting.

**类型：** long | SensorFrequency

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

## sensorInfoParam

```TypeScript
sensorInfoParam?: SensorInfoParam
```

Sensor parameters, including **deviceId** and **sensorIndex**. This API can be used in atomic services since API version 19.

**类型：** SensorInfoParam

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

