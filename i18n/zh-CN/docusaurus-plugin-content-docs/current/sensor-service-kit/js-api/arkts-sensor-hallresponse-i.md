# HallResponse

Describes the Hall effect sensor data. It extends from [Response]sensor.Response.

**继承实现关系：** HallResponse继承自：Response。

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## status

```TypeScript
status: double
```

Hall effect sensor status. This parameter specifies whether a magnetic field exists around a device. The value **0** means that a magnetic field does not exist, and a value greater than **0** means the opposite.

**类型：** double

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

