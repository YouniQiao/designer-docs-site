# ContinuousParam

Defines the parameters for continuous vibration.

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## Modules to Import

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity?: int
```

Vibration intensity. This parameter is optional. The value range is [0,100]. If this parameter is left empty, the default value is **100**.

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## index

```TypeScript
index?: int
```

Channel number. This parameter is optional. The value range is [0,2]. If this parameter is left empty, the default value is **0**.

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## points

```TypeScript
points?: VibratorCurvePoint[]
```

Adjustment points of the vibration curve.

**Type:** VibratorCurvePoint[]

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## frequency

```TypeScript
frequency?: int
```

Vibration frequency. This parameter is optional. The value range is [0,100]. If this parameter is left empty, the default value is **50**.

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

