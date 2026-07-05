# VibratorPattern

Defines the vibration sequence.

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## time

```TypeScript
time: int
```

Absolute vibration start time, in ms.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

## events

```TypeScript
events: Array<VibratorEvent>
```

Vibration event array, which is the **VibratorPattern** object returned by **build() **.

**类型：** Array<VibratorEvent>

**起始版本：** 18

**系统能力：** SystemCapability.Sensors.MiscDevice

