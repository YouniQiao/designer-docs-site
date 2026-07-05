# Response

Describes the timestamp of the sensor data.

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## accuracy

```TypeScript
accuracy: SensorAccuracy
```

Accuracy of the sensor data.

**类型：** SensorAccuracy

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

## timestamp

```TypeScript
timestamp: long
```

Timestamp when the sensor reports data. Time from device startup to data reporting, in nanoseconds.

**类型：** long

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

