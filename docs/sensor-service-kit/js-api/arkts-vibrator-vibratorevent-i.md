# VibratorEvent

Vibration event.

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

## duration

```TypeScript
duration?: int
```

Vibration duration. This parameter is optional, in ms. The value range is (0,5000]. The default value is **48** for short vibration and **1000** for long vibration.

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

## time

```TypeScript
time: int
```

Vibration start time, in ms. The value range is [0,1800000].

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## eventType

```TypeScript
eventType: VibratorEventType
```

Vibration event type.

**Type:** VibratorEventType

**Since:** 18

**System capability:** SystemCapability.Sensors.MiscDevice

## points

```TypeScript
points?: Array<VibratorCurvePoint>
```

Adjustment points of the vibration curve.

**Type:** Array<VibratorCurvePoint>

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

