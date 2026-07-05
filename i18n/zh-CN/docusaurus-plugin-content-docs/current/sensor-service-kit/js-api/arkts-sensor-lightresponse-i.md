# LightResponse

Describes the ambient light sensor data. It extends from [Response]sensor.Response.

**继承实现关系：** LightResponse继承自：Response。

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## 导入模块

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity: double
```

Illumination, in lux.

**类型：** double

**起始版本：** 8

**系统能力：** SystemCapability.Sensors.Sensor

## infraredLuminance

```TypeScript
infraredLuminance?: double
```

Infrared luminance, in cd/m?. This parameter is optional. If this parameter is not supported, a fixed value ( customized by the sensor) is returned. If this parameter is supported, a normal value is returned.

**类型：** double

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.Sensor

## colorTemperature

```TypeScript
colorTemperature?: double
```

Color temperature, in Kelvin. This parameter is optional. If this parameter is not supported, a fixed value ( customized by the sensor) is returned. If this parameter is supported, a normal value is returned.

**类型：** double

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.Sensor

