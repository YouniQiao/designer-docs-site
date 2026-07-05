# VibratorCurvePoint

Defines the gain relative to the vibration intensity.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity?: double
```

Gain relative to the vibration intensity. This parameter is optional. The value range is [0,100%]. If this parameter is left empty, the default value is **1**.

**类型：** double

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## time

```TypeScript
time: int
```

Start time offset, in ms.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## frequency

```TypeScript
frequency?: int
```

Change relative to the vibration frequency. This parameter is optional. The value range is [-100,100]. If this parameter is left empty, the default value is **0**.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

