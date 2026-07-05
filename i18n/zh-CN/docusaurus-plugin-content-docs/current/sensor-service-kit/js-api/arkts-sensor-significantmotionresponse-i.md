# SignificantMotionResponse

Describes the significant motion sensor data. It extends from [Response]sensor.Response.

**继承实现关系：** SignificantMotionResponse继承自：Response。

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

Intensity of a motion. This parameter specifies whether a device has a significant motion on three physical axes (X, Y, and Z). The value **1** is reported when the device has a significant motion.

**类型：** double

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

