# SetBrightnessOptions

Options for setting the screen brightness.

**Since:** 3

**Deprecated since:** 7

<!--Device-unnamed-export interface SetBrightnessOptions--><!--Device-unnamed-export interface SetBrightnessOptions-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## Modules to Import

```TypeScript
import { BrightnessResponse, BrightnessModeResponse, SetBrightnessModeOptions, GetBrightnessModeOptions, SetBrightnessOptions, GetBrightnessOptions, SetKeepScreenOnOptions } from '@kit.BasicServicesKit';
```

## complete

```TypeScript
complete?: () => void
```

Called when an API call is complete.

**Type:** () =&gt; void

**Since:** 3

**Deprecated since:** 7

<!--Device-SetBrightnessOptions-complete?: () => void--><!--Device-SetBrightnessOptions-complete?: () => void-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when an API call has failed. **data** indicates the error information, and **code** indicates the error code.

**Type:** (data: string, code: number) =&gt; void

**Since:** 3

**Deprecated since:** 7

<!--Device-SetBrightnessOptions-fail?: (data: string, code: number) => void--><!--Device-SetBrightnessOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## success

```TypeScript
success?: () => void
```

Called when an API call is successful.

**Type:** () =&gt; void

**Since:** 3

**Deprecated since:** 7

<!--Device-SetBrightnessOptions-success?: () => void--><!--Device-SetBrightnessOptions-success?: () => void-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## value

```TypeScript
value: number
```

Screen brightness. The value is an integer ranging from **1** to **255**.

- If the value is less than or equal to **0**, value **1** will be used.  
- If the value is greater than **255**, value **255** will be used.  
- If the value contains decimals, the integral part of the value will be used. For example, if value **8.1** is set, value **8** will be used.

**Type:** number

**Since:** 3

**Deprecated since:** 7

<!--Device-SetBrightnessOptions-value: number--><!--Device-SetBrightnessOptions-value: number-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

