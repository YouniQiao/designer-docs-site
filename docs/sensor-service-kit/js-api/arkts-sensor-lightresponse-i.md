# LightResponse

Describes the ambient light sensor data. It extends from [Response]sensor.Response.

**Inheritance:** LightResponseextends: Response.

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## Modules to Import

```TypeScript
import { sensor } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity: double
```

Illumination, in lux.

**Type:** double

**Since:** 8

**System capability:** SystemCapability.Sensors.Sensor

## infraredLuminance

```TypeScript
infraredLuminance?: double
```

Infrared luminance, in cd/m?. This parameter is optional. If this parameter is not supported, a fixed value ( customized by the sensor) is returned. If this parameter is supported, a normal value is returned.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.Sensors.Sensor

## colorTemperature

```TypeScript
colorTemperature?: double
```

Color temperature, in Kelvin. This parameter is optional. If this parameter is not supported, a fixed value ( customized by the sensor) is returned. If this parameter is supported, a normal value is returned.

**Type:** double

**Since:** 12

**System capability:** SystemCapability.Sensors.Sensor

