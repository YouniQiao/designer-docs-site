# ContinuousParam

Defines the parameters for continuous vibration.

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

## index

```TypeScript
index?: int
```

Channel number. This parameter is optional. The value range is [0,2]. If this parameter is left empty, the default value is **0**.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## points

```TypeScript
points?: VibratorCurvePoint[]
```

Adjustment points of the vibration curve.

**类型：** VibratorCurvePoint[]

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

