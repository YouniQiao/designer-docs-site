# VibrateOptions

Defines the vibration options.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** VibrateTime

**Required permissions:** ohos.permission.VIBRATE

<!--Device-unnamed-export interface VibrateOptions--><!--Device-unnamed-export interface VibrateOptions-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

## Modules to Import

```TypeScript
import { VibrateOptions } from '@kit.SensorServiceKit';
```

## complete

```TypeScript
complete?: () => void
```

Called when the API call is complete.

**Type:** () => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** startVibration

**Required permissions:** ohos.permission.VIBRATE

**Model restriction:** This API can be used only in the FA model.

<!--Device-VibrateOptions-complete?: () => void--><!--Device-VibrateOptions-complete?: () => void-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the API call fails.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** startVibration

**Required permissions:** ohos.permission.VIBRATE

**Model restriction:** This API can be used only in the FA model.

<!--Device-VibrateOptions-fail?: (data: string, code: number) => void--><!--Device-VibrateOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

## mode

```TypeScript
mode?: 'number' | 'short'
```

Vibration mode. The value **long** indicates long vibration, and **short** indicates short vibration. The default value is **long**.

**Type:** 'number' | 'short'

**Since:** 3

**Deprecated since:** 8

**Substitutes:** VibrateTime

**Required permissions:** ohos.permission.VIBRATE

**Model restriction:** This API can be used only in the FA model.

<!--Device-VibrateOptions-mode?: 'long' | 'short'--><!--Device-VibrateOptions-mode?: 'long' | 'short'-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

## success

```TypeScript
success: () => void
```

Called when the vibrator data changes.

**Type:** () => void

**Since:** 3

**Deprecated since:** 8

**Substitutes:** startVibration

**Required permissions:** ohos.permission.VIBRATE

**Model restriction:** This API can be used only in the FA model.

<!--Device-VibrateOptions-success: () => void--><!--Device-VibrateOptions-success: () => void-End-->

**System capability:** SystemCapability.Sensors.MiscDevice.Lite

