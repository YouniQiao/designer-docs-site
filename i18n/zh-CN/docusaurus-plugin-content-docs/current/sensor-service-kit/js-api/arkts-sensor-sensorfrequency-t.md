# SensorFrequency

```TypeScript
type SensorFrequency = 'game' | 'ui' | 'normal'
```

Defines the reporting frequency mode of the sensor.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.Sensor

| 类型 | 说明 |
| --- | --- |
| 'game' | Game mode, which specifies a sensor data reporting frequency of 20,000,000 ns. This  parameter takes effect only when the frequency is within the frequency range supported by the hardware. |
| 'ui' | UI mode, which specifies a sensor data reporting frequency of 60,000,000 ns. This parameter  takes effect only when the frequency is within the frequency range supported by the hardware. |
| 'normal' | Normal mode, which specifies a sensor data reporting frequency of 200,000,000 ns. This  parameter takes effect only when the frequency is within the frequency range supported by the hardware. |

