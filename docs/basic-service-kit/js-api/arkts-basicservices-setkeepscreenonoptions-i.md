# SetKeepScreenOnOptions

Options for setting the screen to be steady on.

**Since:** 3

**Deprecated since:** 7

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

**Type:** () => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when an API call has failed. **data** indicates the error information, and **code** indicates the error
code.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## keepScreenOn

```TypeScript
keepScreenOn: boolean
```

The value **true** means to keep the screen steady on, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## success

```TypeScript
success?: () => void
```

Called when an API call is successful.

**Type:** () => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

