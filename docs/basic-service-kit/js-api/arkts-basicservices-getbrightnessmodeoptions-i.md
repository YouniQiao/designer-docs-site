# GetBrightnessModeOptions

Options for obtaining the screen brightness mode.

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## Modules to Import

```TypeScript
import { BrightnessResponse, BrightnessModeResponse, SetBrightnessModeOptions, GetBrightnessModeOptions, SetBrightnessOptions, GetBrightnessOptions, SetKeepScreenOnOptions } from '@system.brightness';
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

Called when an API call has failed. **data** indicates the error information, and **code** indicates the error code.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## success

```TypeScript
success?: (data: BrightnessModeResponse) => void
```

Called when an API call is successful. **data** is a return value of the [BrightnessModeResponse](arkts-basicservices-brightnessmoderesponse-i.md#brightnessmoderesponse) type.

**Type:** (data: BrightnessModeResponse) => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

