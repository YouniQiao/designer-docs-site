# PedometerDetectionResponse

Describes the pedometer detection sensor data. It extends from [Response]sensor.Response.

**继承实现关系：** PedometerDetectionResponse继承自：Response。

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## scalar

```TypeScript
scalar: double
```

Pedometer detection. This parameter specifies whether a user takes a step. The value **0** means that the user does not take a step, and **1** means that the user takes a step.

**类型：** double

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

