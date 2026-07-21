# Vibrator

**Since:** 3

**Deprecated since:** 8

**Substitutes:** vibrator/vibrator

**Required permissions:** ohos.permission.VIBRATE

<!--Device-unnamed-export default class Vibrator--><!--Device-unnamed-export default class Vibrator-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

## Modules to Import

```TypeScript
import { VibrateOptions } from '@kit.SensorServiceKit';
```

<a id="vibrate"></a>
## vibrate

```TypeScript
static vibrate(options?: VibrateOptions): void
```

Triggers device vibration.

> **NOTE**  
>  
> Except for lite wearables. You are advised to use  
> [vibrator.startVibration()](arkts-sensorservice-vibrator-startvibration-f.md#startvibration-1) since API version 8.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** [startVibration(effect:](arkts-sensorservice-vibrator-startvibration-f.md#startvibration-1)

**Required permissions:** ohos.permission.VIBRATE

**Model restriction:** This API can be used only in the FA model.

<!--Device-Vibrator-static vibrate(options?: VibrateOptions): void--><!--Device-Vibrator-static vibrate(options?: VibrateOptions): void-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [VibrateOptions](arkts-sensorservice-vibrator-vibrateoptions-i.md) | No | Vibration options. |

