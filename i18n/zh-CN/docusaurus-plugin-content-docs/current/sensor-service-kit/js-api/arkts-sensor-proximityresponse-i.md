# ProximityResponse

Describes the proximity sensor data. It extends from [Response]sensor.Response.

**继承实现关系：** ProximityResponse继承自：Response。

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## distance

```TypeScript
distance: double
```

Proximity between the visible object and the device monitor. The value **0** means the two are close to each other, and a value greater than 0 means that they are far away from each other.

**类型：** double

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

