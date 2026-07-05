# VibratePreset

Represents the preset vibration effect. You can pass **VibratePreset** to [VibrateEffect9+]vibrator.VibrateEffect to specify a preset vibration effect when calling [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>) or [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute).

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## intensity

```TypeScript
intensity?: int
```

Vibration intensity. This parameter is optional. The value range is [0, 100]. The default value is **100**. If vibration intensity adjustment is not supported, the default vibration intensity will be used.

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Sensors.MiscDevice

## effectId

```TypeScript
effectId: string
```

Effect ID. The value is a string of a maximum of 64 characters. If the length exceeds 64 characters, the first 64 characters are used.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.MiscDevice

## count

```TypeScript
count?: int
```

Number of repeated vibrations. This parameter is optional. The default value is **1**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.MiscDevice

## type

```TypeScript
type: 'preset'
```

The value **preset** means that vibration is triggered based on the specified effect.

**类型：** 'preset'

**起始版本：** 9

**系统能力：** SystemCapability.Sensors.MiscDevice

