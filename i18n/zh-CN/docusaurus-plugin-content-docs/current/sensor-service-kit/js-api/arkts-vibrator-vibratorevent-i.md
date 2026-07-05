# VibratorEvent

Vibration event.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity?: int
```

Vibration intensity. This parameter is optional. The value range is [0,100]. If this parameter is left empty, the default value is **100**.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## duration

```TypeScript
duration?: int
```

Vibration duration. This parameter is optional, in ms. The value range is (0,5000]. The default value is **48** for short vibration and **1000** for long vibration.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## index

```TypeScript
index?: int
```

Channel number. This parameter is optional. The value range is [0,2]. If this parameter is left empty, the default value is **0**.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## time

```TypeScript
time: int
```

Vibration start time, in ms. The value range is [0,1800000].

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## eventType

```TypeScript
eventType: VibratorEventType
```

Vibration event type.

**类型：** VibratorEventType

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## points

```TypeScript
points?: Array<VibratorCurvePoint>
```

Adjustment points of the vibration curve.

**类型：** Array<VibratorCurvePoint>

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## frequency

```TypeScript
frequency?: int
```

Vibration frequency. This parameter is optional. The value range is [0,100]. If this parameter is left empty, the default value is **50**.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

