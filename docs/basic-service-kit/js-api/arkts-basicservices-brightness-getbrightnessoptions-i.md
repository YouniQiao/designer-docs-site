# GetBrightnessOptions

Options for obtaining the screen brightness.

**Since:** 3

**Deprecated since:** 7

<!--Device-unnamed-export interface GetBrightnessOptions--><!--Device-unnamed-export interface GetBrightnessOptions-End-->

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

<!--Device-GetBrightnessOptions-complete?: () => void--><!--Device-GetBrightnessOptions-complete?: () => void-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when an API call has failed. **data** indicates the error information, and **code** indicates the error code.

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 7

<!--Device-GetBrightnessOptions-fail?: (data: string, code: number) => void--><!--Device-GetBrightnessOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## success

```TypeScript
success?: (data: BrightnessResponse) => void
```

Called when an API call is successful. **data** is a return value of the [BrightnessResponse](arkts-basicservices-brightness-brightnessresponse-i.md) type.

**Type:** (data: BrightnessResponse) => void

**Since:** 3

**Deprecated since:** 7

<!--Device-GetBrightnessOptions-success?: (data: BrightnessResponse) => void--><!--Device-GetBrightnessOptions-success?: (data: BrightnessResponse) => void-End-->

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

