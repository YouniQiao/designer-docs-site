# VibratorCurvePoint

Defines the gain relative to the vibration intensity.

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## Modules to Import

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity?: double
```

Gain relative to the vibration intensity. This parameter is optional. The value range is [0,100%]. If this parameter is left empty, the default value is **1**.

**Type:** double

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## time

```TypeScript
time: int
```

Start time offset, in ms.

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## frequency

```TypeScript
frequency?: int
```

Change relative to the vibration frequency. This parameter is optional. The value range is [-100,100]. If this parameter is left empty, the default value is **0**.

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

