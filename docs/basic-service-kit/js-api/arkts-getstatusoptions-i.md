# GetStatusOptions

包含接口调用结果的对象。

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## Modules to Import

```TypeScript
import { GetStatusOptions,BatteryResponse } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

接口调用失败的回调函数。data为错误信息，code为错误码。

**Type:** (data: string, code: number) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## success

```TypeScript
success?: (data: BatteryResponse) => void
```

接口调用成功的回调函数，data为{@link BatteryResponse}类型的返回值。

**Type:** (data: BatteryResponse) => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## complete

```TypeScript
complete?: () => void
```

接口调用结束的回调函数。

**Type:** () => void

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

