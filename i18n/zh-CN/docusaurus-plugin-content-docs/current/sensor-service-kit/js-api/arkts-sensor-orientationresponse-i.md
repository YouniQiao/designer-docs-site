# OrientationResponse

Describes the orientation sensor data. It extends from [Response]sensor.Response.

**继承实现关系：** OrientationResponse继承自：Response。

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## alpha

```TypeScript
alpha: double
```

Rotation angle of the device around the z-axis, in degrees. The value ranges from 0 to 360.

**类型：** double

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

## gamma

```TypeScript
gamma: double
```

Rotation angle of the device around the y-axis, in degrees. The value ranges from 0 to ��90.

**类型：** double

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

## beta

```TypeScript
beta: double
```

Rotation angle of the device around the x-axis, in degrees. The value ranges from 0 to ��180.

**类型：** double

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

