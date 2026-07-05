# GetBrightnessOptions

获取屏幕亮度的参数对象。

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## Modules to Import

```TypeScript
import { BrightnessResponse,BrightnessModeResponse,SetBrightnessModeOptions,GetBrightnessModeOptions,SetBrightnessOptions,GetBrightnessOptions,SetKeepScreenOnOptions } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

接口调用失败的回调函数。data为错误信息，code为错误码。

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## success

```TypeScript
success?: (data: BrightnessResponse) => void
```

接口调用成功的回调函数。data为[BrightnessResponse](arkts-brightnessresponse-i.md#BrightnessResponse)类型的返回值。

**Type:** (data: BrightnessResponse) => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

## complete

```TypeScript
complete?: () => void
```

接口调用结束的回调函数。

**Type:** () => void

**Since:** 3

**Deprecated since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager.Lite

