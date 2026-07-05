# Vibrator

**Since:** 3

**Deprecated since:** 8

**Substitute:** ohos.vibrator/vibrator

**Required permissions:** 

 ohos.permission.VIBRATE

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

## Modules to Import

```TypeScript
import { VibrateOptions } from '@kit.SensorServiceKit';
```

## vibrate

```TypeScript
static vibrate(options?: VibrateOptions): void
```

Triggers device vibration. > **NOTE** > > Except for lite wearables. You are advised to use > [vibrator.startVibration()](arkts-vibrator-startvibration-f.md#startVibration-1) since API version 8.

**Since:** 3

**Deprecated since:** 8

**Substitute:** @ohos.vibrator:vibrator.startVibration(effect:

**Required permissions:** 

 ohos.permission.VIBRATE

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | VibrateOptions | No | Vibration options. |

